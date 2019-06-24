const app = require("../app");
const request = require("supertest");

describe("app", () => {
  it("GET / should return entire pokemon database", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body).toBeTruthy;
      });
  });
});
