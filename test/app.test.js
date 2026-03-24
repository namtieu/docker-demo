const express = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
    it("should return 'Hello, Docker. Today is 24th of March 2026 !'", async () => {
        const res = await express(app).get("/");

        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Hello, Docker. Today is 24th of March 2026 !");
    });
});