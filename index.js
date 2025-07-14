import { USER as createUser } from "./data/user.js";
import { calculateAspect } from "./data/transits.js";
import { PLANET as createPlanet } from "./data/planet.js";
import { MESSAGES as generateMessages } from "./lib/messages.js";

const TRANSITING_PLANETS = [
  createPlanet({ name: "Sun", sign: "Cancer", degree: 20 }),
  createPlanet({ name: "Moon", sign: "Libra", degree: 11 }),
  createPlanet({ name: "Mercury", sign: "Leo", degree: 3 }),
  createPlanet({ name: "Venus", sign: "Leo", degree: 17 }),
  createPlanet({ name: "Mars", sign: "Gemini", degree: 9 }),
  createPlanet({ name: "Jupiter", sign: "Cancer", degree: 1 }),
  createPlanet({ name: "Saturn", sign: "Pisces", degree: 12 }),
  createPlanet({ name: "Uranus", sign: "Taurus", degree: 29 }),
  createPlanet({ name: "Neptune", sign: "Pisces", degree: 29 }),
  createPlanet({ name: "Pluto", sign: "Aquarius", degree: 2 }),
];

const WANDA = createUser("Wanda Maximoff", "1989-02-10T03:33:00", [
  createPlanet({ name: "Sun", sign: "Aquarius", degree: 20.5 }),
  createPlanet({ name: "Moon", sign: "Scorpio", degree: 12.7 }),
  createPlanet({ name: "Mercury", sign: "Aquarius", degree: 18.0 }),
  createPlanet({ name: "Venus", sign: "Pisces", degree: 4.2 }),
  createPlanet({ name: "Mars", sign: "Aries", degree: 2.0 }),
  createPlanet({ name: "Saturn", sign: "Capricorn", degree: 27.8 }),
  createPlanet({ name: "Uranus", sign: "Capricorn", degree: 0.3 }),
  createPlanet({ name: "Neptune", sign: "Capricorn", degree: 10.1 }),
  createPlanet({ name: "Pluto", sign: "Scorpio", degree: 14.9 }),
]);

const VISION = createUser("Vision", "2015-08-23T00:01:00", [
  createPlanet({ name: "Sun", sign: "Virgo", degree: 0.2 }),
  createPlanet({ name: "Moon", sign: "Aquarius", degree: 19.3 }),
  createPlanet({ name: "Mercury", sign: "Leo", degree: 25.1 }),
  createPlanet({ name: "Venus", sign: "Cancer", degree: 14.7 }),
  createPlanet({ name: "Mars", sign: "Cancer", degree: 28.9 }),
  createPlanet({ name: "Saturn", sign: "Scorpio", degree: 28.3 }),
  createPlanet({ name: "Uranus", sign: "Aries", degree: 20.4 }),
  createPlanet({ name: "Neptune", sign: "Pisces", degree: 8.3 }),
  createPlanet({ name: "Pluto", sign: "Capricorn", degree: 13.4 }),
]);

const VISION_TRANSITS = VISION.natalChart.map((natalPlanet) =>
  TRANSITING_PLANETS.map((transitingPlanet) => {
    return calculateAspect(transitingPlanet.degree, natalPlanet.degree);
  })
);

const WANDA_TRANSITS = WANDA.natalChart.map((natalPlanet) =>
  TRANSITING_PLANETS.map((transitingPlanet) => {
    return calculateAspect(transitingPlanet.degree, natalPlanet.degree);
  })
);

// console.log(WANDA_TRANSITS);
// console.log(VISION_TRANSITS);

const GOMEZ = createUser("Gomez Addams", "", [
  createPlanet({ name: "Sun", sign: "Libra", degree: 7.5 }),
  createPlanet({ name: "Moon", sign: "Cancer", degree: 21.2 }),
  createPlanet({ name: "Mercury", sign: "Libra", degree: 12.9 }),
  createPlanet({ name: "Venus", sign: "Scorpio", degree: 3.1 }),
  createPlanet({ name: "Mars", sign: "Leo", degree: 16.4 }),
]);

const MORTICIA = createUser("Morticia Addams", "1942-10-31T00:34:00", [
  createPlanet({ name: "Sun", sign: "Scorpio", degree: 8.0 }),
  createPlanet({ name: "Moon", sign: "Pisces", degree: 18.6 }),
  createPlanet({ name: "Mercury", sign: "Libra", degree: 27.4 }),
  createPlanet({ name: "Venus", sign: "Scorpio", degree: 5.9 }),
  createPlanet({ name: "Mars", sign: "Capricorn", degree: 28.2 }),
]);

const MORTICIA_TRANSITS = MORTICIA.natalChart.flatMap((natalPlanet) =>
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

const GOMEZ_TRANSITS = GOMEZ.natalChart.flatMap((natalPlanet) =>
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

const MARS = createPlanet({ name: "Mars", sign: "Cancer", degree: 28.9 });
console.log(MARS);
