const e = require("express");
const { createRequest, createResponse } = require("node-mocks-http");
const {createArray} = require('../src/controllers/array.controller.js');
  const { OutPutMessage } = require("../src/util/OutPutMessage.js");
  
  jest.mock("../src/controllers/array.controller.js");