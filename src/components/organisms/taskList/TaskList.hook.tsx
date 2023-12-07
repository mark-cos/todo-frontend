import React, { useCallback, useState } from 'react';

import { TaskStatus } from './taskList.types';

import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import {
  DraggableStateSnapshot,
  DraggingStyle,
  DropResult,
  NotDraggingStyle,
} from '@hello-pangea/dnd';

const tasks = [
  {
    title: 'Do Math Homework1',
    id: 1,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 1,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
  {
    title: 'Do Math Homework2',
    id: 2,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 2,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
  {
    title: 'Do Math Homework3',
    id: 3,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 3,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
];

const useTaskList = () => {
  const { t } = useClientTranslation('task');
  function getStyle(
    style: DraggingStyle | NotDraggingStyle | undefined,
    snapshot: DraggableStateSnapshot,
  ) {
    if (!snapshot.isDragging) return {};
    if (!snapshot.isDropAnimating) {
      return style;
    }

    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`,
    };
  }

  //FIXME: TESTCODE
  const taskStatus: TaskStatus = {
    todo: {
      name: 'todo',
      items: tasks,
    },
    complete: {
      name: 'complete',
      items: [],
    },
  };

  const getTitle = (title: string) =>
    title === 'todo' ? t('todoList.title.todo') : t('todoList.title.complete');

  const [columns, setColumns] = useState<TaskStatus>(taskStatus);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) return;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  };

  return { columns, onDragEnd, getStyle, getTitle };
};

export default useTaskList;
