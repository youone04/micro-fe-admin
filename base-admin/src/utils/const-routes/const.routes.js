import Page404 from "../../pages/page.404/page.404"
import {PageAdmin, PageAdminFaktur, PageAdminCreate} from "../../pages/page.admin/page.admin"
import PageHome from "../../pages/page.home/page.home"
import PageUser from "../../pages/page.user/page.user"

export const pathRoutes = {
    homeBase: "/",
    notfound: "*",
    viewAdmin: "/admin",
    createAdmin: "/admin/create",
    viewFaktur: "/faktur",
    viewUser: "/user"
}

export const routes = [
    //admin
    {
        path: pathRoutes.viewAdmin,
        name: "ViewAdmin",
        exact: true,
        component: PageAdmin
    },
    {
        path: pathRoutes.createAdmin,
        name: "CreateAdmin",
        exact: true,
        component: PageAdminCreate
    },
    {
        path: pathRoutes.viewFaktur,
        name: "Faktur",
        exact: true,
        component: PageAdminFaktur
    },
    //end admin
    {
        path: pathRoutes.homeBase,
        name: "Homebase",
        exact: true,
        component: PageHome
    },
    {
        path: pathRoutes.notfound,
        name: "NotFound",
        exact: true,
        component: Page404
    },
    {
        path: pathRoutes.viewUser,
        name: "ViewUser",
        exact: true,
        component: PageUser
    }
]
