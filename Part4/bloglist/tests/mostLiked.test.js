const mostLiked = require("../utils/list_helpers");
const materials = require("./test_materials");
/* const materials = require("./test_materials"); */

const blog = {
  title: "React patterns",
  author: "Michael Chan",
  likes: 12,
};
const blogs = {
  title: "Go To Statement Considered Harmful",
  author: "Edsger W. Dijkstra",
  likes: 5,
};

describe("Blog with most likes", () => {
  test("Of empty list is zero likes", () => {
    const result = mostLiked.favoriteBlog(materials.noBlogList);
    expect(result).toEqual("zero");
  });
  test("Blog with major number of liked", () => {
    const result = mostLiked.favoriteBlog(materials.listWithOneBlog);
    expect(result).toEqual(blog);
  });
  test("Of a bigger list is calculated the most liked", () => {
    const result = mostLiked.favoriteBlog(materials.listWithSomeBlogs);
    expect(result).toEqual(blogs);
  });
});
