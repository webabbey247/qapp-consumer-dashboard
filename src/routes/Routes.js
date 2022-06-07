import { Homepage } from "../pages";

const Routes = [
  {
    path: "/administrator",
    exact: true,
    name: "Administrator",
  },

  {
    path: "/administrator/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
];

export default Routes;
