import truncate from "./index";

test("truncates a paragraph", () => {
  expect(
    truncate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper purus at leo interdum, nec egestas massa vestibulum. Pellentesque ornare eget tellus vel malesuada. Sed et orci quam. Quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate. Donec ultrices pretium rhoncus. Aliquam vitae blandit enim, non gravida nibh. Integer at lorem convallis, pulvinar ligula vitae, blandit ligula."
    )
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus."
  );
});

test("truncates a paragraph to a specific length", () => {
  expect(
    truncate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper purus at leo interdum, nec egestas massa vestibulum. Pellentesque ornare eget tellus vel malesuada. Sed et orci quam. Quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate. Donec ultrices pretium rhoncus. Aliquam vitae blandit enim, non gravida nibh. Integer at lorem convallis, pulvinar ligula vitae, blandit ligula.",
      100
    )
  ).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});

test("truncates a sentence", () => {
  expect(
    truncate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum nullam at diam felis sed vitae iaculis sem duis scelerisque vehicula malesuada nullam sodales eget tortor tincidunt faucibus lorem ipsum dolor sit amet, consectetur adipiscing elit mauris semper purus at leo interdum, nec egestas massa vestibulum pellentesque ornare eget tellus vel malesuada sed et orci quam quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate donec ultrices pretium rhoncus aliquam vitae blandit enim, non gravida nibh integer at lorem convallis, pulvinar ligula vitae, blandit ligula."
    )
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum nullam at diam felis sed vitae iaculis sem duis scelerisque vehicula malesuada nullam sodales eget tortor tincidunt faucibus lorem ipsum dolor sit amet, consectetur adipisci…"
  );
});

test("truncates a sentence to a specific length", () => {
  expect(
    truncate(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum nullam at diam felis sed vitae iaculis sem duis scelerisque vehicula malesuada nullam sodales eget tortor tincidunt faucibus lorem ipsum dolor sit amet, consectetur adipiscing elit mauris semper purus at leo interdum, nec egestas massa vestibulum pellentesque ornare eget tellus vel malesuada sed et orci quam quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate donec ultrices pretium rhoncus aliquam vitae blandit enim, non gravida nibh integer at lorem convallis, pulvinar ligula vitae, blandit ligula.",
      100
    )
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur ipsum eros, scelerisque id volutpa…"
  );
});

// KNOWN ISSUE
// test("truncates a paragraph to a specific length", () => {
//   expect(
//     truncate(
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is some example copy. Ok, said Dr. Feynman. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper purus at leo interdum, nec egestas massa vestibulum. Pellentesque ornare eget tellus vel malesuada. Sed et orci quam. Quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate. Donec ultrices pretium rhoncus. Aliquam vitae blandit enim, non gravida nibh. Integer at lorem convallis, pulvinar ligula vitae, blandit ligula.",
//       100
//     )
//   ).toBe(
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, said. This is some example copy."
//   );
// });
