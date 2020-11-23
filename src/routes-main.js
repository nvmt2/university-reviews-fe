import Home from "./components/body/home-page";
import Topic from "./components/body/topic";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Comment from "./components/body/comment";
import NotFound from "./components/NotFound";
import UserProfile from "./components/body/user-profile";
import DetailUniversity from "./components/body/detail-university";
import NewPost from "./components/body/new-post/FormCreate";
import UserEditor from "./components/body/user-editor";

export const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/topics/:slug", exact: true, component: Topic },
  { path: "/topics/:slug/new-post", component: NewPost },
  { path: "/topics/:slug/comments", component: Comment },
  { path: "/detail-university/:slug", component: DetailUniversity },
  { path: "/user/editor", component: UserEditor },
  { path: "/user", exact: true, component: UserProfile },
  { path: "/login", component: SignIn },
  { path: "/register", component: SignUp },

  { path: "/", component: NotFound },
];

export const navigationsUnAuthen = [
  {
    name: "Trang chủ",
    to: "/",
  },
  {
    name: "Đăng nhập",
    to: "/login",
  },
  {
    name: "Đăng ký",
    to: "/register",
  },
];
export const navigationsAuthentication = [
  {
    name: "Cài đặt",
    to: "/user/editor",
  },
  {
    name: "Bài Đăng",
    to: "/user",
  },
  {
    name: "Đăng xuất",
    to: "/login",
  },
];
