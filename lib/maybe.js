const JUST = (value) => ({
  map: (fn) => JUST(fn(value)),
  getOrElse: () => value,
  isNothing: () => false,
  match: ({ JUST, NOTHING }) => JUST(value),
});

const NOTHING = {
  map: () => NOTHING,
  getOrElse: (fallback) => fallback,
  isNothing: () => true,
  match: ({ JUST, NOTHING }) => NOTHING(),
};

export const MAYBE = (value) =>
  value === null || value === undefined || value === "" ? NOTHING : JUST(value);

//*
// MAYBE: "if value is null, undefined, or "", return NOTHING, else return the value"
// */
