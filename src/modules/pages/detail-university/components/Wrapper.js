import React from 'react';
import Banner from 'modules/pages/detail-university/components/Banner';
import Sticky from 'modules/pages/detail-university/common/Sticky';

function Wrapper({ children }) {
  return (
    <div>
      <Banner />
      <Sticky />
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
