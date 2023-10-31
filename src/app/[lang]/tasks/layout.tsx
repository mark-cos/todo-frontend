import { Header } from '@/components/organisms';
import Nav from '@/components/organisms/nav/Nav';
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
      <div className="container-100svh flex-col">
        <div className="flex-none">
          <Header />
        </div>
        <div className="p-base grow">{children}</div>
        <div>
          <Nav />
        </div>
      </div>
    </>
  );
}
