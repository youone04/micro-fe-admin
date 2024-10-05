import Page404 from "../../pages/page.404/page.404"
import PageAdmin from "../../pages/page.admin/page.admin"
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
    {
        path: pathRoutes.viewAdmin,
        name: "Home",
        exact: true,
        component: PageAdmin
    },
    {
        path: pathRoutes.createAdmin,
        name: "Create",
        exact: true,
        component: PageAdmin
    },
    {
        path: pathRoutes.viewFaktur,
        name: "Faktur",
        exact: true,
        component: PageAdmin
    },
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
