import { Link } from 'react-router-dom';
import Icon from '../../../ui/icon/icon';
import './ResultatCard.scss';

import HomeCategorySkeleton from '../HomeCategory/HomeCategory';

function ResultatsCardSkeleton() {
  return (
    <div className="resultsCard--skeleton">
      <div className="Left">
        <div className="Left-upper">
          <div className="Left-upper__position-id">
            <p>&nbsp;</p>
          </div>
          <div className="Left-upper__organizationInfos">
            <div className="Left-upper__organizationInfos___title">&nbsp;</div>
            <span className="Left-upper__organizationInfos___address">
              &nbsp;
            </span>
          </div>
        </div>
        <div className="Left-upper__description">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="Left-lower">
          <div className="Left-lower__moreInfos">&nbsp;</div>
          <div className="Left-lower__categories">
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
          </div>
        </div>
        <span>&nbsp;</span>
      </div>
      <div className="Right">
        <div className="Right-btn">&nbsp;</div>
        <div className="Right-btn">&nbsp;</div>
      </div>
    </div>
  );
}

export default ResultatsCardSkeleton;
