import React from 'react';
import 'common/rate/style.css';

function Rating() {
  return (
    <div className="rating">
      <div className="row">
        <div className="rating-left">
          <h3 className="rating-title">4.0</h3>
          <div className="row rating-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="rating-content row">
            <i class="fas fa-user"></i>
            <span className="rating-total">99 đánh giá</span>
          </div>
        </div>
        <div className="rating-right">
          <div className="rating-item row">
            <i className="fas fa-star"></i>
            <p className="rating-count">5</p>
            <div className="rating-progress">
              <div className="rating-progress-bar rp-five"></div>
            </div>
          </div>
          <div className="rating-item row">
            <i className="fas fa-star"></i>
            <p className="rating-count">4</p>
            <div className="rating-progress">
              <div className="rating-progress-bar rp-four"></div>
            </div>
          </div>
          <div className="rating-item row">
            <i className="fas fa-star"></i>
            <p className="rating-count">3</p>
            <div className="rating-progress">
              <div className="rating-progress-bar rp-three"></div>
            </div>
          </div>
          <div className="rating-item row">
            <i className="fas fa-star"></i>
            <p className="rating-count">2</p>
            <div className="rating-progress">
              <div className="rating-progress-bar rp-two"></div>
            </div>
          </div>
          <div className="rating-item row">
            <i className="fas fa-star"></i>
            <p className="rating-count">1</p>
            <div className="rating-progress">
              <div className="rating-progress-bar rp-one"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rating;
