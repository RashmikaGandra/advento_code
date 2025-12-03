import {assertEquals} from "jsr:@std/assert";
import { divideWith3} from "../src/day1.js";

Deno.test("simple test", () => {
  assertEquals(divideWith3(12), 4)
});

Deno.test("simple test", () => {
  assertEquals(divideWith3(15), 5)
});

Deno.test("simple test", () => {
  assertEquals(divideWith3(16), 5)
});