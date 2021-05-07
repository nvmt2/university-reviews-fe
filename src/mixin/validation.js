const checkWhiteSpace = (v) => {
  return v.trim().length > 0;
};

export const validEmail = (v) => {
  let bool = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    v
  );
  return bool;
};

export const validFieldLength3 = (v) => {
  let bool = !!v && v.length > 3 && checkWhiteSpace(v);
  return bool;
};

export const validWhiteSpace = (v) => {
  let bool = !!v && checkWhiteSpace(v);
  return bool;
};
export const validPassword = (v) => {
  let bool = !!v && v.length > 7 && checkWhiteSpace(v);
  return bool;
};
