import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
const publicRouter = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRouter = [];

export { publicRouter, privateRouter };
