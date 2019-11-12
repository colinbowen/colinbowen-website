import React, { Component } from 'react'


export default class Links extends Component {
    render() {
        return (
            <div>
                <a href="https://github.com/colinbowen" target="_blank" rel="noopener noreferrer" class="top-left">GitHub</a>
                <a href="https://www.linkedin.com/in/mrcolinbowen/" target="_blank" rel="noopener noreferrer" class="top-right">LinkedIn</a>
                <a href="https://colinbowen.uk/" class="bottom-right">Colin Bowen</a>
            </div>
        );
    }
}