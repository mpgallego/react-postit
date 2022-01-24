import React, { Fragment, useRef, useState, useEffect } from 'react';
import './../style.css';
import { v4 as uuid } from 'uuid';
import { TodoItem } from './TodoItem';

const KEY = "todoList-todos";

export function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const importanteRef = useRef();
    
    const agregarPostit = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const importante = importanteRef.current.checked;
       
        if (description === '') return;

        setTodos((prevTodos) => {
            const newTodos = {
                id: uuid(),
                title: title,
                description: description,
                importante: importante
                
            }

            return [...prevTodos, newTodos];
        });

        titleRef.current.value = null;
        descriptionRef.current.value = null;
        importanteRef.current.checked = false;
        
    }
    const eliminarPostIt = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos)
    }
    
    return (
        <Fragment>
            <h1>Post It Simulator!</h1>
            <div>
                <input ref = {titleRef} type="text" className="form-text titulo" name="titulo" id="titulo" placeholder="Titulo" />
                <input ref = {descriptionRef} type="text" className="form-text descripcion" name="descripcion" id="descripcion" placeholder="Descripción" />
                <input ref = {importanteRef} type="checkbox" className="form-check-input casilla" name="importante" id="importante" />
                <label htmlFor="importante" className="form-label etiqueta">Importante!</label>
                <button onClick = {agregarPostit} type="button" className="boton">Aceptar</button>
            </div>
            <ul className="row">
                {todos.map((todo) => (
                    <TodoItem todo = {todo} key = {todo.id} eliminarPost={eliminarPostIt}  ></TodoItem>
                ))}
            </ul>
        </Fragment>
    );
}

