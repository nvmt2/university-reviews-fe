import Home from "./components/body/home-page";
import Topic from "./components/body/topic";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";

export default [
  { path: "/", exact: true, component: Home },
  { path: "/topics", component: Topic },
  { path: "/login", component: SignIn },
  { path: "/register", component: SignUp },
];
