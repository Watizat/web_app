import './Container.scss';

interface PageProps {
  children: React.ReactNode;
}

function Container({ children }: PageProps) {
  return <div className="container">{children}</div>;
}

export default Container;
