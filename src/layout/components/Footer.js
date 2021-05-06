import React from 'react';
//multiple i18n
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  {t('footer.group')}
                  <span></span>
                </h5>
                <p>{t('footer.descriptionGroup')}</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t('footer.shortAccess')} <span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#."> {t('footer.homepage')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.detailUni')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.post')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.rate')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.zone')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.major')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">{t('footer.fqs')}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t('footer.start')}
                  <span></span>
                </h5>
                <p>{t('footer.descriptionStart')}</p>
                <a className="btn btn-home-page" href="#." target="_blank">
                  {t('footer.btn.signUp')}
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t('footer.contact')}
                  <span></span>
                </h5>
                <p> {t('footer.descriptionContact')}</p>
                <ul className="social-footer2"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
