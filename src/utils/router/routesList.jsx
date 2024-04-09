import Home from "../../pages/Home/index.jsx";
import Description from "../../pages/Description/index.jsx";
import Statistics from "../../pages/Statistics/index.jsx";
import Page404 from "../../pages/Errors/Page404/index.jsx";

const RoutesList = [
    { path: '/', component: <Home />, name: "Home", header: true },
    { path: '/description', component: <Description />, name: "Description", header: true },
    { path: '/statistics', component: <Statistics />, name: "Statistics", header: true },
    { path: '*', component: <Page404 />, name: "Error404", header: false },
]

export default RoutesList