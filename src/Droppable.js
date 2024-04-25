import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'grey' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className={"dropzone"}>
      {props.children}
    </div>
  );
}
