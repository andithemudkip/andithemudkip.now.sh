import React, { Component } from 'react';
import './Taskbar.css';

export class TaskbarItem extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className = "taskbar-item"></div>
        )
    }
}

export default class Taskbar extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className = "taskbar">
                
            </div>
        )
    }
}