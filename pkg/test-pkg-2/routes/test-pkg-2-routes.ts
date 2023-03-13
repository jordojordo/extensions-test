import { PRODUCT_NAME } from '../types';

import Dashboard from '../pages/index.vue';

const routes = [
  {
    name:       `${ PRODUCT_NAME }-c-cluster`,
    path:       `/:product/c/:cluster/dashboard`,
    component:  Dashboard,
  }
];

export default routes;
