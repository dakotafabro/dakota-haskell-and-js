export const USER = (nameStr, birthTimeDateStr, natalChartArr) => {
  return Object.freeze({
    name: nameStr || "",
    birthTime:
      birthTimeDateStr !== ""
        ? birthTimeDateStr
        : "🌫️ Birth time missing. Please enter your time of birth to receive personalized transits.",
    natalChart: birthTimeDateStr !== "" ? natalChartArr : [],
  });
};

//*
// -- account for null values w/ default args
// -- set types in variable names
// -- imply types using fallback values
// -- uses Object.freeze() to create immutability
// -- returns a JS object with no side-effects
// */
