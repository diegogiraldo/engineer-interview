import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = [];

const repoState = {
  open: 'todo',
  closed: 'done'
}

function taskReducer(state, action) {
  switch (action.type) {
    case 'batch_add':
      return [...state, ...action.payload.tasks];
    case 'add':
      return [...state, action.payload.task];
    case 'update':
      return state.map(task => {
        if (task.id === action.payload.task.id) {
          return action.payload.task;
        }
        return task;
      });
    default:
      throw new Error();
  }
};

function useTasksProvider() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const reduce = (task, type) => dispatch({ type, payload: { task }});
  const add = task => reduce(task, 'add');
  const update = task => reduce(task, 'update');

  useEffect(() => {
    let tasks = [];

    const getTasks = async () => {
      tasks = await axios.get('https://api.github.com/repos/every-io/demo-issues/issues?state=all');
      dispatch({
        type: 'batch_add',
        payload: {
          tasks: tasks.data.map(repo => ({
            id: repo.id,
            label: repo.title,
            status: repoState[repo.state]
          }))
        }
      })
    }

    getTasks();


  }, []);

  return {
    add,
    state,
    update,
  };
};

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const tasks = useTasksProvider();

  return (
    <TasksContext.Provider value={tasks}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
