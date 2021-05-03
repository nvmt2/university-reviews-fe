import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import homepageQueries from 'query/homepage';
//internal modules
import { fakeDataAutocomplete } from 'constant/fakeDataAutocomplete';
import { fetchUniversityAction } from 'state/ducks/common/actions/home-page';
//material UI
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
//multiple i18n
import { useTranslation } from 'react-i18next';

const useSearchFormStyle = makeStyles((theme) => ({
  searchIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 99,
  },
  search: {
    width: '60%',
    margin: '0 30px',
    position: 'relative',

    '& input': {
      paddingLeft: '50px !important',
      color: '#ffffff',
      height: '10px',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    '& .MuiIconButton-label': {
      color: '#ffffff',
    },
  },
}));

function SearchMaterial() {
  //STATE
  const { t } = useTranslation();
  const classes = useSearchFormStyle();
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    first: 5,
    skip: 0,
  });
  const [contentSearch, setContentSearch] = useState({
    first: 5,
    skip: 0,
  });

  const { data, loading, error } = useQuery(
    homepageQueries.GET_ALL_UNIVERSITY,
    {
      variables: contentSearch,
    }
  );
  const dataApi = !loading && !error && !!data && data.allUniversities;

  const defaultFilterOptions = createFilterOptions();
  //METHOD
  //set state when user pick one suggest
  const handleOnChange = (e, newValue) => {
    setContentSearch({ ...contentSearch, nameUniversity: newValue });
    // dispatch(fetchUniversityAction(dataApi));
  };
  //set state when user type character
  const handleOnChangeInput = (e, newInputValue) => {
    setQuery({ ...contentSearch, nameUniversity: newInputValue });
  };
  //handle when user click search icon
  const handleOnClick = () => {
    dispatch(fetchUniversityAction(dataApi));
  };
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, 5);
  };
  //LIFECYCLE
  useEffect(() => {
    !!data && dispatch(fetchUniversityAction(dataApi));
  }, [data, loading, error]);
  //set state when user stop to type character within 0.5s
  useEffect(() => {
    const timeOutId = setTimeout(() => setContentSearch(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <IconButton onClick={handleOnClick}>
          <SearchIcon />
        </IconButton>
      </div>
      <Autocomplete
        id="search-form-material-ui"
        freeSolo
        filterOptions={filterOptions}
        onChange={handleOnChange}
        onInputChange={handleOnChangeInput}
        options={fakeDataAutocomplete.map((option, index) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Search input"
            placeholder={t('formSearch.placeholder')}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

export default SearchMaterial;
