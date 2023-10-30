import SearchBox from './SearchBox';
import GuidesPapiers from './GuidesPapiers';
import Watizat from './Watizat';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <SearchBox />
        <GuidesPapiers />
        <Watizat />
      </main>
    </div>
  );
}
