import Providers from '@/libs/redux/providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RqProvier from '@/libs/react-query/RqProvider';
import 'react-toastify/dist/ReactToastify.css';

export type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <Providers>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        pauseOnFocusLoss={false}
        rtl={false}
        theme="dark"
        pauseOnHover
      />
      <RqProvier>{children}</RqProvier>
    </Providers>
  );
}
