import app from "../server";
import listBlogs from "../controllers/blogs/list-blogs";
import addBlog from "../controllers/blogs/add-blog";
import displayBlog from "../controllers/blogs/display-blog";
import deleteBlog from "../controllers/blogs/delete-blog";
import updateBlog from "../controllers/blogs/update-blog";
import adminListPosts from "../controllers/blogs/admin-list-posts";
import { adminMiddleware } from "../helper/middlewares/middlewares";

app.get("/posts", listBlogs);
app.get("/posts/:id", displayBlog);
app.register(
  (app, ops, next) => {
    app.get("/posts", adminMiddleware, adminListPosts);
    app.post("/posts", adminMiddleware, addBlog);
    app.put("/posts/:id", adminMiddleware, updateBlog);
    app.delete("/posts/:id", adminMiddleware, deleteBlog);

    next();
  },
  { prefix: "/admin" }
);
