import app from "../server";
import sendMessage from "../controllers/services/send-message";
import questions from "../controllers/services/questions";
import subscribe from "../controllers/services/subscribe";
import showMessages from "../controllers/admin/show-messages";
import answerQuestions from "../controllers/services/questions";
import returnFood from "../controllers/services/return-food";
import {
  adminMiddleware,
  userMiddleware,
} from "../helper/middlewares/middlewares";
import { adminPrefix } from "../helper/prefix";

app.post("/contactUs", sendMessage);
app.post("/subscribe", subscribe);
app.get("/faq", questions);
app.post("/return", userMiddleware, returnFood);
app.register(
  (app, ops, next) => {
    app.get("/messages", adminMiddleware, showMessages);
    app.post("/faq/:messageId", adminMiddleware, answerQuestions);
    next();
  },
adminPrefix);
