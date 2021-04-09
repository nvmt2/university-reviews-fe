import Home from 'modules/pages/home-page';
import Topic from 'modules/pages/topic';
import SignIn from 'modules/pages/authentication/sign-in';
import SignUp from 'modules/pages/authentication/sign-up';
import Comment from 'modules/pages/comment';
import NotFound from 'modules/pages/not-found';
import UserProfile from 'modules/pages/user-profile';
import DetailUniversity from 'modules/pages/detail-university';
import NewPost from 'modules/pages/new-post';
import UserEditor from 'modules/pages/user-editor';

export const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/topics/:slug', exact: true, component: Topic },
  { path: '/topics/:slug/new-post', component: NewPost },
  { path: '/topics/:slug/comments', component: Comment },
  { path: '/detail-university/:slug', component: DetailUniversity },
  { path: '/user/editor', component: UserEditor },
  { path: '/user', exact: true, component: UserProfile },
  { path: '/login', component: SignIn },
  { path: '/register', component: SignUp },
  { path: '*', component: NotFound },
];
