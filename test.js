const test = require("flug");
const resolve = require("./quick-resolve.js");

test("sync number", ({ eq }) => {
  let checked = false;
  resolve(1).then(value => {
    eq(value, 1);
    checked = true;
  });
  eq(checked, true);
});

test("async number", async ({ eq }) => {
  let checked = false;
  await resolve(Promise.resolve(1)).then(value => {
    eq(value, 1);
    checked = true;
  });
  eq(checked, true);
});

test("sync number with await", async ({ eq }) => {
  const value = await resolve(1);
  eq(value, 1);
});