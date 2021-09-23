# TaskForm

- [TL;DR](#tldr)
- [USE](#use)
- [A11Y MANUAL TESTING](#a11y-manual-testing)
- [TECHNICAL DETAILS](#technical-details)

## TL;DR

The TaskForm component renders a simple for with an input to add a task.  You can just type the name and click on the `+` icon to add a new task to the stack.

## USE

Here's an example of how you would use the TaskForm component

```js
import TaskForm from './TaskForm';

<TaskForm />
```

## A11Y MANUAL TESTING

For accessibility, the form, button and input should have all the aria props, and be able to be readed by screan readers.

## TECHNICAL DETAILS

The TaskForm connects to the useTasks hook to add a new task, or to get the current tasks length to increment the task id.
