// jest.config.js
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest", // 👈 this is key
  },
};
