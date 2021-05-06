import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { defaultColor } from 'modules/pages/analysis/components/optionChart';
import { actionRemoveRatingAndInfo } from 'state/ducks/common/actions/analysis';
//internal components
import { SubBox } from 'theme/component/SubBox';
//material-ui components
import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Header() {
  const { infoUni } = useSelector((state) => state.analysis);
  const dispatch = useDispatch();

  //METHOD
  const onClose = (id) => {
    dispatch(actionRemoveRatingAndInfo(id));
  };
  return (
    <div className="header-analysis">
      {infoUni.map((item, index) => (
        <SubBox
          className="__wrapper-note-uni"
          style={{ border: `1px solid ${defaultColor[index]}` }}
          key={index}
        >
          <IconButton
            aria-label="close"
            onClick={() => onClose(item.University.id)}
          >
            <CloseOutlinedIcon />
          </IconButton>
          <h6 style={{ color: defaultColor[index] }}>
            {' '}
            {item.University.name}
          </h6>
          <p> {item.University.code}</p>
        </SubBox>
      ))}
    </div>
  );
}

export default Header;
