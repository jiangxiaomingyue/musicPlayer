import Vue from 'vue'
import VueRouter from'vue-router'



Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const routes=[
  {
    path:"",
    redirect:'/home'
  },
  {
    path:"/about",
    component:r => require.ensure([], () => r(require('../components/about/about')), 'about')
  },
  {
    path: "/classify",
    component:r => require.ensure([], () => r(require('../components/classify/classify')), 'classify')
  },
  {
    path:"/canlender",
    component:r => require.ensure([], () => r(require('../components/canlender/canlender')), 'canlender')
  },
  {
    path:"/home",
    component:r => require.ensure([], () => r(require('../components/home/home')), 'home')
  }
];

const router=new VueRouter({
  routes,
  mode:'history',
});
export default router;

