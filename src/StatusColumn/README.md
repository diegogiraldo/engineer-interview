# StatusColumn

- [TL;DR](#tldr)
- [USE](#use)
- [A11Y MANUAL TESTING](#a11y-manual-testing)
- [TECHNICAL DETAILS](#technical-details)

## TL;DR

The StatusColumn is a reusable component for rendering each column in the board.  It receives the tasks to display in the stack.

## USE

Here's an example of how you would use the StatusColumn component

```js
import StatusColumn from './StatusColumn';

const todos = [{
  id: 1,
  label: 'Mow the Low',
  status: 'todo'
}];

<StatusColumn title="To Do" tasks={todos} />
```

It receives two props: the `title` and the `tasks`.  The title is the title of the board column.  The tasks is the list of task to render in the column.

## A11Y MANUAL TESTING

For accessibility, the left and right buttons should have the proper aria props to be able to be reached by screan readers.

## TECHNICAL DETAILS

The StatusColumn connects to the useTasks hook to update the task status when the user clicks on the arrows.
