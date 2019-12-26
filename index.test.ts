import truncate from "./index";

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper purus at leo interdum, nec egestas massa vestibulum. Pellentesque ornare eget tellus vel malesuada. Sed et orci quam. Quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate. Donec ultrices pretium rhoncus. Aliquam vitae blandit enim, non gravida nibh. Integer at lorem convallis, pulvinar ligula vitae, blandit ligula.";

const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum nullam at diam felis sed vitae iaculis sem duis scelerisque vehicula malesuada nullam sodales eget tortor tincidunt faucibus lorem ipsum dolor sit amet, consectetur adipiscing elit mauris semper purus at leo interdum, nec egestas massa vestibulum pellentesque ornare eget tellus vel malesuada sed et orci quam quisque fermentum lacus vitae erat volutpat, et finibus turpis vulputate donec ultrices pretium rhoncus aliquam vitae blandit enim, non gravida nibh integer at lorem convallis, pulvinar ligula vitae, blandit ligula.";

test("truncates a sentence", () => {
  expect(truncate(paragraph)).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum eros, scelerisque id volutpat nec, lobortis quis ipsum. Nullam at diam felis. Sed vitae iaculis sem. Duis scelerisque vehicula malesuada. Nullam sodales eget tortor tincidunt faucibus.");
});
