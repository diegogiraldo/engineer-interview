import React, {useState} from 'react';

import { useTasks } from '../hooks/useTasks';
import {
  inputStyle,
  buttonStyle
} from './TaskForm.style';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { add, state } = useTasks();

  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  const handleSubmit = () => {
    if (taskName === '') {
      // simple alert for quick setup
      return alert('please write the task name');
    }

    add({
      id: state.length + 1,
      label: taskName,
      status: 'todo'
    });
  };

  return (
    <form>
      <input
        style={inputStyle}
        type="text"
        name="task_name"
        placeholder="Add Task"
        value={taskName}
        onChange={handleInputChange}
      />
      <button
        style={buttonStyle}
        type="button"
        onClick={handleSubmit}>
        +
      </button>
    </form>
  );
};

export default TaskForm;
