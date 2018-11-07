var Browser = require("zombie");
var assert = require("assert");

var app = require("../helloworld");

/* var expect = require("chai").expect;
var request = require("request");

it("Main page content", function(done) {
  request("http://localhost:8080", function(error, response, body) {
    expect(body).to.equal("Hello World");
    done();
  });
}); */

var request = require("supertest");
var app = require("../helloworld.js");
describe("GET /", function() {
  it("respond with hello world", function(done) {
    //navigate to root and check the the response is "hello world"
    request(app)
      .get("/")
      .expect("hello world", done);
  });
});
