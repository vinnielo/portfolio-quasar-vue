const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     {
  //       path: '', component: () => import('pages/IndexPage.vue')
  //     },
  //     {
  //       path: 'home', component: () => import('pages/HomePage.vue')
  //     },
  //   ]
  // },
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SplashPage.vue"),
      },
      {
        path: "home",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "about",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "work",
        component: () => import("pages/WorkPage.vue"),
      },
      {
        path: "contact",
        component: () => import("pages/ContactPage.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
