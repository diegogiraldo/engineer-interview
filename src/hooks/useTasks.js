import { createContext, useContext, useReducer } from 'react';

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
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
