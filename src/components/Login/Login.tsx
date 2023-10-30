import { useMediaQuery } from 'react-responsive';
// import ProgressiveImage from 'react-progressive-graceful-image';

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
        <div className="flex flex-col justify-center h-full min-h-full my-auto ">
          {/* <ProgressiveImage
            src="https://unsplash.com/photos/Q1p7bh3SHj8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNvY2lhbHxlbnwwfHx8fDE2OTg2NTExOTZ8MA&force=true"
            placeholder="https://unsplash.com/photos/Q1p7bh3SHj8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNvY2lhbHxlbnwwfHx8fDE2OTg2NTExOTZ8MA&force=true&w=320"
          >
            {(src, loading) => (
              <img
                className={`image${
                  loading ? ' loading' : ' loaded'
                } absolute inset-0 object-cover object-top w-full h-full -z-10 `}
                src={src}
                alt="Robot"
              />
            )}
          </ProgressiveImage> */}
          {children}
        </div>
      ) : (
        <NoMobile />
      )}
    </>
  );
}
