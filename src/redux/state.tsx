import {useState} from "react";


let state = {
    profilePage: {
        postData: [
            {message: 'Hi', likes: 3},
            {message: 'How are you', likes: 5},
        ]
    },
    dialogsPage: {
        messages: [
            {message: 'Hi'},
            {message: 'How are you'},
            {message: 'Good'},
            {message: 'thx'}
        ],
        users: [
            {name: 'Vasya'},
            {name: 'Vika'},
            {name: 'Ola'},
            {name: 'Vital'},
            {name: 'Stepa'},
            {name: 'Stas'}
        ],

    }
}



export default state

