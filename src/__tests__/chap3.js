test('sec 1', () => {
  let [foo, [[bar], baz]] = [1, [[2], 3]];
  expect(bar).toBe(2);
  expect(bar).toBe(3);
});
