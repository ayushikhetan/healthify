// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
// using fetch mock
global.fetch = require("jest-fetch-mock");
