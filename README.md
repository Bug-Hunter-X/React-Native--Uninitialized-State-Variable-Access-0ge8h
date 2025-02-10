# React Native Uninitialized State Variable Access

This repository demonstrates a common error in React Native: accessing a state variable before it has been initialized using `useState`.  The `bug.js` file shows the incorrect implementation, leading to undefined behavior.  The `bugSolution.js` file provides the corrected version.

## Problem

When you use `useState` in a functional component, the initial state value is not immediately available.  Attempting to access the state variable before the component mounts or before an asynchronous operation that updates the state completes can cause errors.

## Solution

Ensure that any access to your state variable only happens after the component has mounted and after any async operations to update the state have completed. Often, conditional rendering (or optional chaining) is necessary.