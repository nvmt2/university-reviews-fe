const convertTypes = (reducersName = "", listTypesName = []) => {
  let converted = {};
  if (reducersName.length === 0 || listTypesName === 0) return {};
  listTypesName.forEach(
    (type) =>
      (converted = {
        ...converted,
        [type]: `@@${reducersName}Type/${type}`,
      })
  );
  return converted;
};
export default convertTypes;
