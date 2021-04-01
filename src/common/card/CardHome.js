import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
//internal modules
import { pageTransition } from 'common/page-transition/configVarian';
//internal components
import Rating from 'common/rate/Rating';
//material-ui
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function CardHome(props) {
  const { address, introduce, logo, name, id, status } = props;
  const [mark, setMark] = React.useState(false);
  const handleClickMark = () => {
    setMark(!mark);
  };
  return (
    <motion.div
      className="highlight-topic container-fluid"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="row body-card-home border-bottom">
        <div className="col-md-1">
          <div id="img-logo">
            <img
              src={logo.publicUrl}
              alt="logo university"
              className="logo-university img-fluid"
            />
          </div>
        </div>
        <div className="col-md-11">
          <p className="university-name">{name}</p>

          <span className="address">{address}</span>
          <span className="count-rate mr-3">
            <i className="fas fa-star"></i> 5 đánh giá
          </span>
          <span className="count-comment">
            <i className="fas fa-comments"></i> 15 bình luận
          </span>

          <p className="demo-content">{introduce}</p>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-11 footer-card-home">
          {
            <NavLink
              className="detail-card-home"
              to={(location) => {
                return {
                  pathname: `/detail-university/${id}`,
                };
              }}
              onClick={() => localStorage.setItem('slugUniversity', id)} //pass id university to localStorage so that it resolve matching url at detail-university/index directory
            >
              Chi tiết
            </NavLink>
          }
          <i className="fas fa-chevron-right"></i>
          <div className="favourite-bookmark">
            <Tooltip
              title={
                <React.Fragment>
                  <Rating />
                </React.Fragment>
              }
            >
              {/* <button className="card-star"></button> */}
              <IconButton onClick={handleClickMark}>
                <BookmarkBorderIcon style={{ color: mark ? 'blue' : '' }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardHome;
