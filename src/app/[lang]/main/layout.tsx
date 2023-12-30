import { Header, TaskDialog } from '@/components/organisms';
import Nav from '@/components/organisms/nav/Nav';

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
        <div className="p-base grow pb-24">{children}</div>
        <div className="fixed bottom-0 w-full">
          <Nav />
        </div>
      </div>
      <TaskDialog />
    </>
  );
}
