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
app.get("/admin/posts", adminMiddleware, adminListPosts);
app.post("/admin/posts", adminMiddleware, addBlog);
app.put("/admin/posts/:id", adminMiddleware, updateBlog);
app.delete("/admin/posts/:id", adminMiddleware, deleteBlog);
