'use client';

import React from 'react';
import useTaskList from './TaskList.hook';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

function TaskList() {
  const { columns, onDragEnd, getStyle, getTitle } = useTaskList();

  return (
    <div>
      <div className="flex h-full flex-col justify-center gap-y-4">
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div className="flex flex-col" key={columnId}>
                <h2>{getTitle(column.name)}</h2>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`${
                            snapshot.isDraggingOver ? 'border border-blue-300' : ''
                          }
                          flex flex-col gap-y-4`}
                        >
                          {column.items.map((task, index) => {
                            return (
                              <Draggable
                                key={task.id}
                                draggableId={task.id.toString()}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`select-none ${
                                        snapshot.isDragging ? 'bg-gray-300' : ''
                                      }`}
                                      style={{
                                        ...getStyle(
                                          provided.draggableProps.style,
                                          snapshot,
                                        ),
                                      }}
                                    >
                                      <TaskItem task={task} />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default TaskList;
