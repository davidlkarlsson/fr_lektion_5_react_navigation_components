import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Homepage / Landing page
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
