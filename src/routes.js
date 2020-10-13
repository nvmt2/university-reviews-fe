import Home from "./components/body/home-page";
import Topic from "./components/body/topic";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Comment from "./components/body/comment"
import NotFound from "./components/NotFound";

export default [
  { path: "/", exact: true, component: Home },
  { path: "/topics/:slug", exact: true, component: Topic },
  { path: "/login", component: SignIn },
  { path: "/register", component: SignUp },
  { path: "/topics/:slug/comments", component: Comment},
  { path: "/", component: NotFound },
];
