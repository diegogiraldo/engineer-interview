import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { ChallengeComponent } from './ChallengeComponent';
import { TasksProvider } from './hooks/useTasks';

const renderCodeChallenge = () => render(
  <TasksProvider>
    <ChallengeComponent />
  </TasksProvider>
);

test('renders the challenge with 3 status columns', () => {
  renderCodeChallenge();

  const todo = screen.getByText(/To Do/i);
  const inProgress = screen.getByText(/In Progress/i);
  const done = screen.getByText(/Done/i);

  expect(todo).toBeInTheDocument();
  expect(inProgress).toBeInTheDocument();
  expect(done).toBeInTheDocument();
});

test('renders the form to add tasks', () => {
  renderCodeChallenge();
  const input = screen.getByPlaceholderText(/Add Task/i);
  expect(input).toBeInTheDocument();
});

test('adds a new task', async () => {
  renderCodeChallenge();

  const input = screen.getByPlaceholderText(/Add Task/i);
  await fireEvent.change(input, {target: {value: 'Mow the Low'}});
  const button = screen.getByText('+');
  await fireEvent.click(button);
  const todoColumn = screen.getByText(/To Do/i).closest('div');

  expect(within(todoColumn).getByText(/Mow the Low/i)).toBeInTheDocument();
});

test('changes task status', async () => {
  const {debug} = renderCodeChallenge();

  const input = screen.getByPlaceholderText(/Add Task/i);
  await fireEvent.change(input, {target: {value: 'Mow the Low'}});
  const button = screen.getByText('+');
  await fireEvent.click(button);

  const todo = screen.getByText(/To Do/i).closest('div');
  const withinTodo = within(todo);

  const arrowRight = withinTodo.getByTestId('arrowRight');

  const inProgress = screen.getByText(/In Progress/i).closest('div');
  const withinInProgress = within(inProgress);

  await fireEvent.click(arrowRight);

  expect(withinInProgress.getByText(/Mow the Low/i)).toBeInTheDocument();
});
