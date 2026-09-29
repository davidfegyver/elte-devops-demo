import test from "node:test";
import assert from "node:assert/strict";
import { renderTruck, truck } from "./app.js";

test("truck details show identity and location", () => {
  const html = renderTruck(truck);
  assert.match(html, /Truck 67/);
  assert.match(html, /Lidl Blaha/);
  assert.match(html, /Budapest, Hungary/);
});
