import { Link } from 'react-router-dom';
import links from './linksData';

export default function Links() {
  return (
    <div className="flex items-center justify-between gap-8 grow">
      <div className="flex justify-center gap-8">
        {links
          .filter((e) => e.position === 'left')
          .map((e) => (
            <Link
              key={e.name}
              to={e.to}
              target={e.target}
              className="flex items-center justify-center px-3 py-2 my-auto transition delay-75 rounded duration-50 hover:no-underline hover:bg-watizat-600/10"
            >
              {e.name}
            </Link>
          ))}
      </div>
      <div className="flex justify-center gap-8">
        {links
          .filter((e) => e.position === 'right')
          .map((e) => (
            <Link
              key={e.name}
              to={e.to}
              target={e.target}
              className="flex items-center justify-center px-3 py-2 my-auto transition delay-75 rounded duration-50 hover:no-underline hover:bg-watizat-600/10"
            >
              {e.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
