import React, { useState } from 'react';
//internal modules
import { validEmail, validWhiteSpace, validPassword } from 'mixin/validation';
import { typeOfValidation } from 'mixin/typeOfValidation';
//material component
import TextField from '@material-ui/core/TextField';

function MyTextField(props) {
  //STATE
  const { helperText, typeValid, onSetState, onState, ...rest } = props;
  const [isError, setIsError] = useState();

  //METHOD
  const executeCorrespondingValidation = (type, v) => {
    switch (type) {
      case typeOfValidation.VALID_EMAIL_TYPE:
        return validEmail(v);
      case typeOfValidation.VALID_WHITE_SPACE:
        return validWhiteSpace(v);
      case typeOfValidation.VALID_PASSWORD:
        return validPassword(v);
      default:
        return null;
    }
  };
  const handleValidation = (event) => {
    let v = event.target.value;
    let name = event.target.name;
    if (executeCorrespondingValidation(typeValid, v)) {
      setIsError(false);
      !!onSetState &&
        onSetState({
          ...onState,
          [name]: v,
        });
    } else {
      setIsError(true);
    }
  };

  return (
    <TextField
      helperText={isError && helperText}
      onChange={handleValidation}
      onBlur={handleValidation}
      error={isError}
      {...rest}
    />
  );
}

export default MyTextField;
