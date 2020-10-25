import Introduce from "./components/body/detail-university/Introduce";
import Major from "./components/body/detail-university/Major";
import Cooperation from "./components/body/detail-university/Cooperation";
import Gallery from "./components/body/detail-university/Gallery";

export const routes =  [
    { path: "/detail-university/:slug", exact: true, component: Introduce },
    { path: "/detail-university/:slug/major", component: Major },
    { path: "/detail-university/:slug/cooperation",  component: Cooperation },
    { path: "/detail-university/:slug/gallery",  component: Gallery },
]

export const toRoutes = [
    {
      name: "Giới thiệu",
      field: ""
    },
    {
      name: "Chuyên ngành",
      field: "/major"
    },
    {
      name: "Hợp tác ",
      field: "/cooperation"
    },
    {
      name: "Hoạt động",
      field: "/gallery"
    },
    
  ]