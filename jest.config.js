// jest.config.cjs
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest", // 👈 this is key
  },
};
