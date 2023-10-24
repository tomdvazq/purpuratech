import Home from '../pages/Home/Home';
import Referidos from '../pages/Referidos/Referidos';

export const siteRoute = [
    {
        path: '/',
        page: Home,
        label: 'Home'
    },
    {
        path: '/referidos',
        page: Referidos,
        label: 'Referidos'
    },
];