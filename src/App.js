import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

function App() {

    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (<Draggable><img src={logo} className="App-logo" alt="logo"/></Draggable>);
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }
    return (<div className="App">
            <header className="App-header">
                <DndContext onDragEnd={handleDragEnd}>
                {!isDropped ? draggableMarkup : null}
                    <p>This is a simple demo of DND Kit.</p>
                    <div className={"info"}>Tested on Node : v18.17.1 and NPM : 9.6.7</div>
                    <Droppable>
                        {isDropped ? draggableMarkup : 'Drop Logo here'}
                    </Droppable>
                </DndContext>
            </header>
        </div>);
}

export default App;
