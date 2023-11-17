import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';

export type TaskDialogProps = {
  dictionary?: {};
  task?: Task;
};

export type TaskMainFormProps = {
  title: string;
  description: string;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};
