import Introduce from "./components/body/detail-university/Introduce";
import Major from "./components/body/detail-university/Major";
import Cooperation from "./components/body/detail-university/Cooperation";
import Galery from "./components/body/detail-university/Galery";

export const routes =  [
    { path: "/detail-university/:slug", exact: true, component: Introduce },
    { path: "/detail-university/:slug/major", component: Major },
    { path: "/detail-university/:slug/cooperation",  component: Cooperation },
    { path: "/detail-university/:slug/galery",  component: Galery },
]

export const toRoutes = [
    {
      name: "Introduce",
      field: ""
    },
    {
      name: "Major",
      field: "/major"
    },
    {
      name: "Cooperation",
      field: "/cooperation"
    },
    {
      name: "Galery",
      field: "/galery"
    },
    
  ]