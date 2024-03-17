import { Header } from '@/components/organisms';
import Nav from '@/components/organisms/nav/Nav';
import TaskDialog from '@/components/organisms/teskDialog/TaskDialog';

export type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <div className="container-100svh flex-col">
        <div className="flex-none">
          <Header />
        </div>
        <div className="grow px-5 pb-28">{children}</div>
        <div className="fixed bottom-0 w-full">
          <Nav />
        </div>
      </div>
      <TaskDialog isNewTask />
    </>
  );
}
