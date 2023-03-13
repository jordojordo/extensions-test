import { PRODUCT_NAME } from './types';
import { rootProductRoute } from './utils/custom-routing';

export function init($plugin: any, store: any) {
  const {
    product,
    basicType,
    virtualType,
  } = $plugin.DSL(store, $plugin.name);

  product({
    inStore:             'management',
    inExplorer:          true,
    icon:                'gear',
    removeable:          false,
    showClusterSwitcher: false,
    to:                  rootProductRoute()
  });

  virtualType({
    label:       PRODUCT_NAME,
    icon:        'gear',
    group:       'Root',
    name:        PRODUCT_NAME,
    namespaced:  false,
    weight:      99,
    route:       rootProductRoute(),
    overview:    true
  });

  basicType([
    PRODUCT_NAME,
  ]);
}
