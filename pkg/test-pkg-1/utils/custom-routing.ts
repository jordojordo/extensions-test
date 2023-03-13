import { PRODUCT_NAME } from '../types';

const BLANK_CLUSTER = '_';

export const rootProductRoute = () => ({
  name:    `${ PRODUCT_NAME }-c-cluster`,
  params: { product: PRODUCT_NAME, cluster: BLANK_CLUSTER },
  meta:   { pkg: PRODUCT_NAME }
});

export const createProductRoute = (name?: string, params?: Object, meta?: Object) => ({
  name:   name || `c-cluster-product-resource`,
  params: { ...rootProductRoute().params, ...params },
  meta:   { ...rootProductRoute().meta, ...meta }
});
