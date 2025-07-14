import { PLANET } from "./planet.js";

const TRANSIT_TYPES = ["square", "opposition", "conjuction", "trine"];

export const TRANSITS = (
  typeStr = "",
  planetObj = PLANET(),
  natalPlanetObj = [PLANET()]
) => {
  return Object.freeze({
    type: typeStr.includes(TRANSIT_TYPES) ? typeStr : "",
    planet: planetObj,
    natalPlanet: natalPlanetObj,
  });
};

//*
// -- account for null values w/ default args
// -- set types in variable names and imply types in initial values for default args
// -- use Object.freeze() to create immutability
// -- returns a JS object with no side effects
// */
