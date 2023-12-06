'use client';
import { StrictModeDroppable } from '@/components/molecules/strictModeDroppable/StrictModeDroppable';
import React from 'react';

import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import useTaskList from './TaskList.hook';
import TaskItem from '@/components/molecules/taskItem/TaskItem';

function TaskList() {
  const { columns, onDragEnd, getStyle } = useTaskList();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div className="flex flex-col" key={columnId}>
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <StrictModeDroppable droppableId={columnId} key={columnId}>
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
                  </StrictModeDroppable>
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
