import test from "node:test";
import assert from "node:assert/strict";
import { formatBattery } from "./battery.js";
import { renderTruck, truck } from "./app.js";

for (const [input, expected] of [
  [72, "[#######---] 72%"],
  [0, "[----------] 0%"],
  [100, "[##########] 100%"],
  [74, "[#######---] 74%"],
  [75, "[########--] 75%"],
]) {
  test(`battery ${input}% displays ${expected}`, () => {
    assert.equal(formatBattery(input), expected);
  });
}

test("missing or invalid values are unavailable", () => {
  for (const input of [undefined, null, -1, 101, 1.5, "72", NaN, Infinity]) {
    assert.equal(formatBattery(input), "Unavailable");
  }
});

test("mock truck supplies the new battery reading", () => {
  assert.equal(truck.batteryPercent, 72);
});

for (const [input, expected] of [
  [72, "[#######---] 72%"],
  [0, "[----------] 0%"],
  [undefined, "Unavailable"],
]) {
  test(`page renders a Battery row for ${input}`, () => {
    const html = renderTruck({ ...truck, batteryPercent: input });
    assert.match(html, /<dt>\s*Battery\s*<\/dt>/);
    assert.ok(html.includes(expected), `Expected rendered page to include ${expected}`);
  });
}
