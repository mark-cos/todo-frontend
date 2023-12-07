'use client';

import React, { useState } from 'react';
import useTaskList from './TaskList.hook';
import TaskItem from '@/components/molecules/taskItem/TaskItem';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import Select from '@/components/atoms/select/Select';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

function TaskList() {
  const { t } = useClientTranslation('task');
  const getOptions = () => [
    {
      id: 1,
      value: 'today',
      text: t('select.period.today'),
    },
    {
      id: 2,
      value: 'week',
      text: t('select.period.week'),
    },
    {
      id: 3,
      value: 'month',
      text: t('select.period.month'),
    },
  ];

  const { columns, onDragEnd, getStyle, getTitle } = useTaskList();
  const [select, setSelect] = useState(getOptions()[1].value);
  const handleChangePeriod = (selectedPeriod: string) => {
    setSelect(selectedPeriod);
    console.log(selectedPeriod);
  };

  return (
    <div>
      <Select
        options={getOptions()}
        select={select}
        onChange={handleChangePeriod}
        className="w-28"
      />
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
