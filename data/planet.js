export const PLANET = ({ name, sign, degree }) => {
  return Object.freeze({
    name: name || "",
    sign: sign || "",
    degree: degree || 0,
  });
};

//*
// -- account for null values w/ default args
// -- imply types in fallback values
// -- use Object.freeze() to create immutability
// -- returns a JS object with no side-effects
// */
