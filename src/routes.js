import Home from "./components/body/home-page";
import Topic from "./components/body/topic";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Comment from "./components/body/comment";
import NotFound from "./components/NotFound";
import UserProfile from "./components/body/user-profile";
import DetailUniversity from "./components/body/detail-university";

export default [
  { path: "/", exact: true, component: Home },
  { path: "/topics/:slug", exact: true, component: Topic },
  { path: "/login", component: SignIn },
  { path: "/register", component: SignUp },
  { path: "/topics/:slug/comments", component: Comment },
  { path: "/user", component: UserProfile },
  { path: "/detail-university/:slug", component: DetailUniversity },

  { path: "/", component: NotFound },
];
