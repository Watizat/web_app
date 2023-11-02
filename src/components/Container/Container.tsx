import { useLocation } from 'react-router-dom';

interface PageProps {
  children: React.ReactNode;
}

export default function Container({ children }: PageProps) {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col w-full h-full px-4 my-auto">{children}</div>
  );
}
