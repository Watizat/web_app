import { useMediaQuery } from 'react-responsive';
import FrontColor from '../Container/FrontColor';
import NoMobile from '../Errors/NoMobile';

interface PageProps {
  children: React.ReactNode;
}

export default function Login({ children }: PageProps) {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isTablet ? (
        <article className="flex flex-col justify-center w-full h-full min-h-full my-auto">
          <FrontColor>{children}</FrontColor>
        </article>
      ) : (
        <NoMobile />
      )}
    </>
  );
}
