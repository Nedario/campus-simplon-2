/* jshint esversion : 6 */

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import User from "./components/pages/User.vue";
import UserProfile from "./components/user-list/UserProfile.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
        name: "user-profile",
        path: ":id",
        component: UserProfile
      }
    ]
  },

];
