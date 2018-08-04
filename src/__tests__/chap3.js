test('sec 1', () => {
  let [foo, [[bar], baz]] = [1, [[2], 3]];
  bar;
  console.log(bar);
});
