import { useMediaQuery } from 'react-responsive';

import SearchBox from './SearchBox';
import Infos from './Infos';
import BetaPhase from '../../Alerts/BetaPhase';

export default function Home() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <article className="bg-white">
      <div className="flex flex-col gap-20 mt-5 mb-20 lg:mb-0 lg:mt-10 xl:mt-20 lg:gap-20 xl:gap-80 isolate">
        <SearchBox />

        {isTablet && <Infos />}
      </div>{' '}
      <BetaPhase />
    </article>
  );
}
