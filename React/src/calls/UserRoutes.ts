import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Users/Login";
import Register from "../pages/Users/Register";

export const usersRoutes = [
    {
        label: 'Regístrate para contribuir',
        path: '/register',
        component: Register,
    },
    {
        label: 'Iniciar sesión',
        path: '/login',
        component: Login,
    },
    {
        label: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    }
]