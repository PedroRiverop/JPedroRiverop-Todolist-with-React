import React, { useEffect, useState} from 'react';
 const url = "https://playground.4geeks.com/todo/"

export function getUser () {
    const user = prompt("Ingrese su numbre completo", "").toLowerCase().trim();
    console.log(user);
    return user;
    
};

export function verifyUser (user_name){
    let options = { method:  'GET' };
    return fetch((url + "users/" + user_name) , options)
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.json()}
                else {((respuesta.status == 404)? newUser(user_name): console.log("Error al leer usuario"  + respuesta.status))}
        })
        .then(data => { return data.todos;})
        .catch(error => console.error('Error:', error));
};

function newUser (user_name){
    let options = { method:  'POST' };
    fetch(url + "users/" + user_name, options)
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.json()}
                else {console.log("Error al crear usuario"  + respuesta.status)}
        })
        .then(data => {return data})
        .catch(error => console.error('Error:', error));
};

export function newTodo (inputValue, user) {
    let options = { method:  'POST'
        , headers: { 'Content-Type': 'application/json', }
        , body: JSON.stringify({label: inputValue, is_done: false}),
    };
    fetch(url + "todos/" + user, options)
    .then(respuesta => {
        if (respuesta.ok) {
            console.log(respuesta.status);
            return respuesta.json()}
            else {console.log("Error al crear tarea"  + respuesta.status)}
            })
    .then(data => {console.log(data); return data})
    .catch(error => console.error('Error:', error));

};

export function deleteTodo (arrayTodos){

    let options = { method:  'DELETE', headers: { 'Content-Type': 'application/json', } };
    let idTodo = (arrayTodos).id;
    fetch(url + "todos/" + idTodo, options)
    .then(respuesta => {
        if (respuesta.status == 204) {
            console.log(respuesta)} //no retorna nada la API, no hay un Body que convertir
            else {console.log("Error al eliminar tarea "  + respuesta.status)}
    })
    .catch(error => console.error('Error:', error));
    
};