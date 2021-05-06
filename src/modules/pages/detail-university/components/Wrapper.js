import React from 'react';
//internal components
import Banner from 'modules/pages/detail-university/components/Banner';
import Sticky from 'modules/pages/detail-university/common/Sticky';
import { MyContainer } from 'theme/component/MyContainer';
function Wrapper({ children }) {
  return (
    <MyContainer>
      <Banner />
      <Sticky />
      <div>{children}</div>
    </MyContainer>
  );
}

export default Wrapper;
