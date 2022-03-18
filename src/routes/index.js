import * as reviews from '../views';

const routeData = [
  {
    id: 'home',
    path: '/home',
    component: reviews.Home,
  },
  {
    id: 'about',
    path: '/about',
    component: reviews.About,
  },
  {
    id: 'business',
    path: '/business',
    component: reviews.Business,
  },
  {
    id: 'contact',
    path: '/contact',
    component: reviews.Contact,
  },
  {
    id: 'feedback',
    path: '/feedback',
    component: reviews.Feedback,
  },
];
export default routeData;
