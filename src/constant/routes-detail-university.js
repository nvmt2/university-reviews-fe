import Introduce from 'modules/pages/detail-university/components/Introduce';
import Major from 'modules/pages/detail-university/components/Major';
import Cooperation from 'modules/pages/detail-university/components/Cooperation';
import Gallery from 'modules/pages/detail-university/components/Gallery';

export const routes = [
  { path: '/detail-university/:slug', exact: true, component: Introduce },
  { path: '/detail-university/:slug/major', component: Major },
  { path: '/detail-university/:slug/cooperation', component: Cooperation },
  { path: '/detail-university/:slug/gallery', component: Gallery },
];
