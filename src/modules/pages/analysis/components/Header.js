import React from 'react';
import { useSelector } from 'react-redux';
//internal modules
import { defaultColor } from 'modules/pages/analysis/components/optionChart';

function Header() {
  const { infoUni } = useSelector((state) => state.analysis);

  //   if (infoUni.length === 0) return <div>Loading...</div>;
  //   else
  return (
    <div className="header-analysis">
      {/* <div className="__wrapper-note-uni">
        <h6>Duy Tan</h6>
        <p>DTU</p>
      </div>
      <div className="__wrapper-note-uni">
        <h6>Bach khoa</h6>
        <p>DUT</p>
      </div> */}
      {/* <div className="__wrapper-note-uni">
        <h6>Bach khoa</h6>
        <p>DUT</p>
      </div> */}
      {/* <div style={{ color: defaultColor[index] }}>
            {item.University.name}
          </div> */}
      {infoUni.map((item, index) => (
        <div
          className="__wrapper-note-uni"
          style={{ border: `1px solid ${defaultColor[index]}` }}
        >
          <h6 style={{ color: defaultColor[index] }}>
            {' '}
            {item.University.name}
          </h6>
          <p> {item.University.code}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
