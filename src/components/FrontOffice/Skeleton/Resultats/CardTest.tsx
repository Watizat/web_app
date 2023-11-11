import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  speed: number;
  width: number;
  height: number;
  viewBox: string;
  backgroundColor: string;
  foregroundColor: string;
  props: any;
}

const MyLoader = ({ props }: Props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={250}
    viewBox="0 0 600 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="4" rx="3" ry="3" width="439" height="12" />
    <rect x="49" y="26" rx="3" ry="3" width="268" height="11" />
    <circle cx="20" cy="20" r="20" />
    <rect x="6" y="56" rx="0" ry="0" width="564" height="54" />
    <rect x="7" y="128" rx="0" ry="0" width="249" height="29" />
    <rect x="7" y="176" rx="0" ry="0" width="560" height="51" />
  </ContentLoader>
);

export default MyLoader;
