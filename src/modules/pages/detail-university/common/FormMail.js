import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import detailUniversityQuery from 'query/detail-university';
//multiple i18n
import { useTranslation } from 'react-i18next';

function FormMail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_UNIVERSITY,
    {
      variables: {
        id: slug,
      },
    }
  );
  const contentAuthor = !loading && !error && data.University;
  useEffect(() => {}, [data, error, loading]);
  return (
    <div className="container">
      <div id="form_thong_tin_LH">
        <span id="label_thong_tin_lien_he" className=" d-block text-center">
          {t('detailUniversity.formMail.subTitle')}
        </span>
        <h1 className="tieu-de-lien-he text-center mt-1">
          <span id="doi-mau"> {t('detailUniversity.formMail.title')}</span>
        </h1>
        <img id="trangtri" src="images/Image 26.png" alt="" />
        {!!contentAuthor ? (
          <div className="row mt-3 ">
            <div className="col-md-4">
              <span className="icon-LH">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="lable-dia-chi text-center">
                {t('detailUniversity.formMail.address')}
              </p>
              <p className="chi-tietLH text-center">{contentAuthor.address}</p>
            </div>
            <div className="col-md-4">
              <span className="icon-LH">
                <i className="fas fa-phone"></i>
              </span>
              <p className="lable-dia-chi text-center">
                {t('detailUniversity.formMail.phone')}
              </p>
              <p className="chi-tietLH text-center">09056633225</p>
            </div>
            <div className="col-md-4">
              <span className="icon-LH">
                <i className="far fa-envelope"></i>
              </span>
              <p className="lable-dia-chi text-center">
                {t('detailUniversity.formMail.email')}
              </p>
              <p className="chi-tietLH text-center">{contentAuthor.email}</p>
            </div>
          </div>
        ) : (
          <h5>Loading</h5>
        )}

        <hr />

        <div className="row">
          <div className="col-md-7">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="namehotenLH"
                  placeholder={t(
                    'detailUniversity.formMail.placeHolder.fullName'
                  )}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="emailLH"
                  placeholder={t('detailUniversity.formMail.placeHolder.email')}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="sdtLH"
                  placeholder={t('detailUniversity.formMail.placeHolder.phone')}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="noidungLH"
                  cols=""
                  rows="3"
                  placeholder={t(
                    'detailUniversity.formMail.placeHolder.content'
                  )}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-success">
                {t('detailUniversity.formMail.btn.send')}
              </button>
            </form>
          </div>

          <div className="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.621264723115!2d108.17168634199756!3d16.047248394951094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1608903968172!5m2!1svi!2s"
              width="100%"
              height="80%"
              aria-hidden="false"
              title="google map"
            ></iframe>
            {/* <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8204743580077!2d108.22070411468421!3d16.074803188877496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218307d81c91d%3A0xbc7c14cab8a09c8!2sDuy%20Tan%20University!5e0!3m2!1sen!2s!4v1606904089524!5m2!1sen!2s"
              width="100%"
              height="80%"
              // frameborder="0"
              style={{ border: 0 }}
              // allowfullscreen=""
              aria-hidden="false"
              // tabindex="0"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormMail;
