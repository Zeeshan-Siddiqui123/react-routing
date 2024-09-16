import About from "./screens/About";
import Contact from "./screens/Contact";
// import Dashboard from "./screens/Dashboard";
import Index from "./screens/Index";
import Posts from "./screens/Posts";

export const routes = [
    {
        path: "/",
        screen: <Index />,
        label: "Home"
    },
    {
        path: "/about",
        screen: <About />,
        label: "About"
    },
    {
        path: "/contact",
        screen: <Contact />,
        label: "Contact",
    },
    {
        path: "/posts",
        screen: <Posts />,
        label: "Post",
    },
]

