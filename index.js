import { USER as createUser } from "./data/user.js";
import { TRANSITS as createTransit } from "./data/transits.js";
import { PLANET as createPlanet } from "./data/planet.js";

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

console.log(WANDA, VISION);
