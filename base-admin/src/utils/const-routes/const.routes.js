import Page404 from "../../pages/page.404/page.404"
import PageAdmin from "../../pages/page.admin/page.admin"
import PageHome from "../../pages/page.home/page.home"

export const pathRoutes = {
    homeBase: "/",
    notfound: "*",
    viewAdmin: "/admin",
    createAdmin: "/admin/create",
    viewFaktur: "/faktur"
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
    }
]
