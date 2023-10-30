import { useLocation } from 'react-router-dom';

interface PageProps {
  children: React.ReactNode;
}

export default function Container({ children }: PageProps) {
  const { pathname } = useLocation();
  return (
    <div
      className={`flex flex-col ${
        pathname === '/resultats' || pathname === '/resultats/'
          ? 'w-full px-4'
          : 'w-full lg:w-4/5 xl:w-10/12 mx-auto'
      } my-auto h-full`}
    >
      {children}
    </div>
  );
}
