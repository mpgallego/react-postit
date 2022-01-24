import React, { Fragment } from 'react';
import { TodoList } from './components/TodoList';
import './style.css';

export function App() {
    return (
        <Fragment>
            <TodoList />
        </Fragment>
    );
}