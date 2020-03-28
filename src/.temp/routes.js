export default [
  {
    path: "/cafe/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-cafe-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/templates/ContentfulCafe.vue")
  },
  {
    path: "/suedstadt/",
    component: () => import(/* webpackChunkName: "page--src--pages--suedstadt-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Südstadt.vue")
  },
  {
    path: "/impressum/",
    component: () => import(/* webpackChunkName: "page--src--pages--impressum-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Impressum.vue")
  },
  {
    path: "/info/",
    component: () => import(/* webpackChunkName: "page--src--pages--info-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Info.vue")
  },
  {
    path: "/ehrenfeld/",
    component: () => import(/* webpackChunkName: "page--src--pages--ehrenfeld-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Ehrenfeld.vue")
  },
  {
    path: "/data/",
    component: () => import(/* webpackChunkName: "page--src--pages--data-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Data.vue")
  },
  {
    path: "/deutz/",
    component: () => import(/* webpackChunkName: "page--src--pages--deutz-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Deutz.vue")
  },
  {
    path: "/cafes/",
    component: () => import(/* webpackChunkName: "page--src--pages--cafes-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Cafes.vue")
  },
  {
    path: "/belgique/",
    component: () => import(/* webpackChunkName: "page--src--pages--belgique-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Belgique.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/benediktmix/dev/supportyourlocal/src/pages/404.vue")
  }
]

