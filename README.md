# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop is created by improperly using the `useEffect` hook. The bug arises because the `setCount` function is called within the `useEffect` function, leading to continuous state updates, and thus an infinite render cycle. The solution shows how to resolve the issue by managing dependencies correctly.

## Bug

The `bug.js` file contains the erroneous code, causing an infinite loop. The `useEffect` hook updates the `count` state within its own execution, triggering re-renders indefinitely.

## Solution

The `bugSolution.js` file shows the corrected code. The dependency array `[]` is now empty which makes the function call only once on the initial render.