import React from 'react';

import StatusColumn from './StatusColumn';
import TaskForm from './TaskForm';
import { useTasks } from './hooks/useTasks';

export function ChallengeComponent() {
  const { state } = useTasks();

  const todos = state.filter(task => task.status === 'todo');
  const inProgress = state.filter(task => task.status === 'in_progress');
  const done = state.filter(task => task.status === 'done');

  return (
    <>
      <div style={{ flex: 1, display: 'flex', padding: 30, gap: 50 }}>
        <StatusColumn title="To Do" tasks={todos} />
        <StatusColumn title="In Progress" tasks={inProgress} />
        <StatusColumn title="Done" tasks={done} />
      </div>
      <div style={{ flex: '0 auto', padding: 30 }}>
        <TaskForm />
      </div>
    </>
  )
};
