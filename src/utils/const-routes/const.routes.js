import { PageFaktur, PageHomeCreate, PageHomeView } from "../../pages"

export const pathRoutes = {
    viewAdmin: "/admin",
    createAdmin: "/admin/create",
    viewFaktur: "/faktur",

}

export const routes = [
    {
        path: pathRoutes.viewAdmin,
        name: "Home",
        exact: true,
        component: PageHomeView
    },
    {
        path: pathRoutes.createAdmin,
        name: "Create",
        exact: true,
        component: PageHomeCreate
    },
    {
        path: pathRoutes.viewFaktur,
        name: "Faktur",
        exact: true,
        component: PageFaktur
    },
]