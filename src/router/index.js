import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import store from "@store"

const routes = [
    {
        path: "/",
        meta: {
            title: "Sisland"
        },
        component: () => import(/* webpackChunkName: "Home" */ "@views/Home")
    },
    {
        path: "/doc",
        meta: {
            title: "文档介绍"
        },
        component: () => import("@views/Doc"),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/doc")
            },
            {
                path: "introduce",
                meta: {
                    title: "Sisland 介绍"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/introduce")
            },
            {
                path: "install",
                meta: {
                    title: "Sisland 安装"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/install")
            },
            {
                path: "get-start",
                meta: {
                    title: "Sisland 快速上手"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/getStart")
            },
            {
                path: "switch",
                meta: {
                    title: "Switch 开关"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/switch")
            },
            {
                path: "button",
                meta: {
                    title: "Button 按钮"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/button")
            },
            {
                path: "modal",
                meta: {
                    title: "Modal 对话框"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/modal")
            },
            {
                path: "tabs",
                meta: {
                    title: "Tabs 标签页"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/tabs")
            },
            {
                path: "form",
                meta: {
                    title: "Form 表单"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/form")
            },
            {
                path: "anchor",
                meta: {
                    title: "Anchor 锚点"
                },
                component: () => import(/* webpackChunkName: "doc" */ "@views/demo/anchor")
            }
        ]
    }
]

const router = new VueRouter({ routes })

router.beforeEach((to, form, next) => {
    // 每个页面的标题
    document.title = to.meta.title || ""
    //小屏幕点击关闭aside
    const clientWidth = document.documentElement.clientWidth
    if (clientWidth <= 500) store.commit("aside/asideVisible", false)
    next()
})

router.afterEach(() => {})

export default router
