import { createWebHistory, createRouter } from "vue-router";
//router.js中我們為每一個頁面創建一個路由
//path：指向URL
//name：指向這個頁面時使用的名字
//compoment：路由調用此頁面時，要加載的組件

const routes =  [
  {
    path: "/",
    alias: "/todo",
    name: "todo",
    component: () => import("./components/TodoList")
  },
  {
    path: "/todo/:id",
    name: "todo-details",
    component: () => import("./components/Todo")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTodo")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;