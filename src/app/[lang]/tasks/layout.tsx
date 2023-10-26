import TasksPageTempl from '@/components/templates/tasks/TasksPageTempl';

export type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <TasksPageTempl />
    </>
  );
}
