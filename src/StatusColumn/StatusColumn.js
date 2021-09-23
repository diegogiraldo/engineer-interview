import React from 'react';
import { useTasks } from '../hooks/useTasks';
import {
  rootStyle,
  titleStyle,
  taskStyle,
  buttonRedStyle,
  buttonGreenStyle,
  labelStyle
} from './StatusColumn.style';

const moveRight = {
  todo: 'in_progress',
  in_progress: 'done'
};

const moveLeft = {
  done: 'in_progress',
  in_progress: 'todo'
};

const StatusColumn = ({ title, tasks }) => {
  const { update } = useTasks();

  const handleChangeStatus = (task, move) => {
    update({
      ...task,
      status: move[task.status]
    });
  };

  return (
    <div style={rootStyle}>
      <header>
        <h4 style={titleStyle}>{title}</h4>
      </header>
      <div>
      {
        tasks.map(task => (
          <div key={task.id} style={taskStyle}>
            <button
              style={buttonRedStyle}
              disabled={task.status === 'todo'}
              onClick={() => handleChangeStatus(task, moveLeft)}
            >
                &#8592;
            </button>
            <span style={labelStyle}>{task.label}</span>
            <button
              data-testid="arrowRight"
              style={buttonGreenStyle}
              disabled={task.status === 'done'}
              onClick={() => handleChangeStatus(task, moveRight)}
            >
              &#8594;
            </button>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default StatusColumn;
