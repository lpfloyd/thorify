"use strict";

import { thorify } from "../src";
const Web3 = require("web3");

describe("initialization", () => {
  it("init thorify should not throw error", () => {
    const web3 = new Web3();
    thorify(web3, "http://localhost:8669");
  });
});