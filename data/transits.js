import { PLANET as createPlanet } from "./planet.js";

export const ASPECTS = Object.freeze({
  conjunction: Object.freeze({
    degrees: 0,
    vibe: "🔥 Supercharged, merged energy",
  }),
  sextile: Object.freeze({
    degrees: 60,
    vibe: "🤝 Opportunity, soft synergy",
  }),
  square: Object.freeze({
    degrees: 90,
    vibe: "⚔️ Tension, growth via challenge",
  }),
  trine: Object.freeze({
    degrees: 120,
    vibe: "🌈 Harmony, ease, flowing gifts",
  }),
  opposition: Object.freeze({
    degrees: 180,
    vibe: "🪞 Polarity, push/pull dynamics",
  }),
});

export function calculateAspect(transitDeg, natalDeg, orb = 5) {
  const degreeDiff = Math.abs(transitDeg - natalDeg) % 360;
  const smallestArc = degreeDiff > 180 ? 360 - degreeDiff : degreeDiff;

  return Object.entries(ASPECTS).reduce(
    (matches, [aspectName, { degrees, vibe }]) => {
      const diffFromAspect = Math.abs(smallestArc - degrees);
      if (diffFromAspect <= orb) {
        matches.push({
          aspect: aspectName,
          degreesApart: Number(smallestArc.toFixed(2)),
          vibe,
        });
      }
      return matches;
    },
    []
  );
}

export const generateTransits = (userObj) => {
  return userObj.natalChart.flatMap((natalPlanet) =>
    TRANSITING_PLANETS.flatMap((transitingPlanet) => {
      const aspects = calculateAspect(
        transitingPlanet.degree,
        natalPlanet.degree
      );

      return aspects.map((aspect) => ({
        natalPlanet: natalPlanet.name,
        natalDegree: natalPlanet.degree,
        natalSign: natalPlanet.sign,
        transitPlanet: transitingPlanet.name,
        transitDegree: transitingPlanet.degree,
        transitSign: transitingPlanet.sign,
        aspect: aspect.aspect,
        degreesApart: aspect.degreesApart,
        vibe: aspect.vibe,
      }));
    })
  );
};

//*
// -- account for null values w/ default args
// -- set types in variable names and imply types in initial values for default args
// -- use Object.freeze() to create immutability
// -- returns a JS object with no side effects
// */
