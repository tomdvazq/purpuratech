import { Routes, Route } from 'react-router-dom';
import { siteRoute } from './calls/Routes'
import { usersRoutes } from './calls/UserRoutes';

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            {siteRoute.map((route, index) => (
                <Route key={index} path={route.path} element={<route.page />} />
            ))}
            {usersRoutes.map((user, index) => (
                <Route key={index} path={user.path} element={<user.component />} />
            ))}
        </Routes>
    );
};
