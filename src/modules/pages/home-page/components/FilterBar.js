import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
//internal modules
import { fetchUniversityAction } from 'state/ducks/common/actions/home-page';
import homepageQueries from 'query/homepage';
//internal components
import { SubBox } from 'theme/component/SubBox';
//material-ui component
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
//multiple i18n
import { useTranslation } from 'react-i18next';

function FilterBar() {
  //STATE
  const { t } = useTranslation();
  const [items, setItems] = useState({
    first: 5,
    skip: 0,
  });
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(
    homepageQueries.GET_ALL_UNIVERSITY,
    {
      variables: items,
    }
  );
  const dataApi = !loading && !error && !!data && data.allUniversities;
  const marks = [
    {
      value: 0,
      label: '0 tr',
    },
    {
      value: 40,
      label: '40 tr',
    },
    {
      value: 80,
      label: '80 tr',
    },
  ];

  //METHOD
  const addItem = (event) => {
    event.preventDefault();
    dispatch(fetchUniversityAction(dataApi));
  };
  const handleOnChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SubBox id="filter">
      <Tooltip
        title={
          <React.Fragment>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738108.916615233!2d96.86368427428319!3d15.628379032561192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1608904361721!5m2!1svi!2s"
              width="280"
              height="300"
              aria-hidden="false"
              title="google map vietnam"
            ></iframe>
          </React.Fragment>
        }
      >
        <a href="/" className="map d-block text-center">
          <i className="fas fa-map-marked-alt"></i>{' '}
          {t('filterBar.watchLocation')}
        </a>
      </Tooltip>

      <form action="" className="filter-form" onSubmit={addItem}>
        <fieldset>
          <legend>{t('filterBar.searchByRegion')}</legend>
          <label className="locate d-block">
            <input
              type="radio"
              id="bac"
              name="zone"
              value="Mien Bac"
              onChange={handleOnChange}
            />
            <label htmlFor="bac">{t('filterBar.rBtn.northern')}</label>
          </label>
          <label className="locate d-block">
            <input
              type="radio"
              id="trung"
              name="zone"
              value="Mien Trung"
              onChange={handleOnChange}
            />
            <label htmlFor="trung">{t('filterBar.rBtn.central')}</label>
          </label>
          <label className="locate d-block">
            <input
              type="radio"
              id="nam"
              name="zone"
              value="Mien Nam"
              onChange={handleOnChange}
            />
            <label htmlFor="nam">{t('filterBar.rBtn.southern')}</label>
          </label>
        </fieldset>
        {/* <!-- -----------end tìm kiếm theo vùng---------- -->  */}

        <fieldset>
          <legend>{t('filterBar.groupsOfDisciplines')}</legend>
          <select
            id="nhomNghanh"
            className="form-control"
            name="name_major"
            onChange={handleOnChange}
          >
            <option value="">{t('filterBar.dropBox.all')}</option>
            <option value="Công nghệ thông tin">
              {t('filterBar.dropBox.techMajor')}
            </option>
            <option>{t('filterBar.dropBox.productionMajor')}</option>
            <option>{t('filterBar.dropBox.architectureMajor')}</option>
            <option value="Kinh doanh">
              {t('filterBar.dropBox.businessMajor')}
            </option>
            <option value="Luật">{t('filterBar.dropBox.lawMajor')}</option>
            <option>{t('filterBar.dropBox.artMajor')}</option>
            <option>{t('filterBar.dropBox.socialScienceMajor')}</option>
            <option>{t('filterBar.dropBox.basicScienceMajor')}</option>
            <option>{t('filterBar.dropBox.pedagogyMajor')}</option>
            <option>{t('filterBar.dropBox.agricultureMajor')}</option>
            <option value="Y học">
              {t('filterBar.dropBox.productionMajor')}
            </option>
          </select>
        </fieldset>
        {/* <!-- -----------end nhóm nghành---------- --> */}
        <fieldset>
          <legend>{t('filterBar.typeOfUniversity')}</legend>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={t('filterBar.checkBox.publicUni')}
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={t('filterBar.checkBox.privateUni')}
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={t('filterBar.checkBox.college')}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={t('filterBar.checkBox.training')}
          />
        </fieldset>
        {/* <!-- end --> */}
        <fieldset>
          <legend>{t('filterBar.courseFee')}</legend>
          <Slider
            defaultValue={20}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </fieldset>

        <button className="btn btn-outline-success btn-loc">
          {t('filterBar.btn.filter')}
        </button>
      </form>
    </SubBox>
  );
}

export default FilterBar;
