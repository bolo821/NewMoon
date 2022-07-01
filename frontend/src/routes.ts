import { dAppName } from 'config';
import withPageTitle from './components/PageTitle';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Menu from './pages/menu';
import Nft from 'pages/nft';
import UserProfile from 'pages/profile';
import Collection from 'pages/collection';
import Creator from 'pages/creator';

// export const routeNames = {
//   home: '/',
//   dashboard: '/dashboard',
//   transaction: '/transaction',
//   unlock: '/unlock',
//   ledger: '/ledger',
//   walletconnect: '/walletconnect'
// };

export const routeNames = {
  welcome: '/',
  home: '/home',
  menu: '/menu',
  nft: '/nft',
  profile: '/profile',
  collection: '/collections',
  creator: '/creator',
};

// const routes: Array<any> = [
//   {
//     path: routeNames.home,
//     title: 'Home',
//     component: Home
//   },
//   {
//     path: routeNames.dashboard,
//     title: 'Dashboard',
//     component: Dashboard,
//     authenticatedRoute: true
//   },
//   {
//     path: routeNames.transaction,
//     title: 'Transaction',
//     component: Transaction
//   }
// ];

const routes: Array<any> = [
  {
    path: routeNames.welcome,
    title: 'Welcome',
    component: Welcome
  },
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.menu,
    title: 'Menu',
    component: Menu
  },
  {
    path: routeNames.nft,
    title: 'Nft',
    component: Nft,
  },
  {
    path: routeNames.profile,
    title: 'Profile',
    component: UserProfile,
  },
  {
    path: routeNames.collection,
    title: 'Collections',
    component: Collection,
  },
  {
    path: routeNames.creator,
    title: 'Creator',
    component: Creator,
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
