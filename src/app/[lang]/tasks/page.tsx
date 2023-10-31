import TasksPageTempl from '@/components/templates/tasks/TasksPageTempl';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';

export type TasksPageProps = {
  params: { lang: Locale };
};

export default async function TasksPage({ params }: TasksPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return <TasksPageTempl />;
}
