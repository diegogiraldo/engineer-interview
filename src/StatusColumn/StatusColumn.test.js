import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusColumn from './StatusColumn';
import { TasksProvider } from '../hooks/useTasks';

const todos = [{
  id: 1,
  label: 'Mow the Low',
  status: 'todo'
}];

test('renders the status column', () => {
  render(
    <TasksProvider>
      <StatusColumn title="To Do" tasks={todos} />
    </TasksProvider>
  );
  const title = screen.getByText(/To Do/i);
  expect(title).toBeInTheDocument();
});

test('renders the tasks', () => {
  render(
    <TasksProvider>
      <StatusColumn title="To Do" tasks={todos} />
    </TasksProvider>
  );
  const label = screen.getByText(/Mow the Low/i);
  expect(label).toBeInTheDocument();
});
