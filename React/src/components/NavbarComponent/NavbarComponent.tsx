import { siteRoute } from '../../calls/Routes';
import { branding } from '../../calls/Brand';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import { usersRoutes } from '../../calls/UserRoutes';
import AuthUser from '../../api/AuthUser';

const NavbarComponent = () => {
    const {getToken} = AuthUser();
    return (
        <>
            <div className='users'>
                {!getToken() ? usersRoutes.slice(0, 2).map((user, index) => (
                    <Link key={index} to={user.path}><button className=''>{user.label}</button></Link>
                ))
                : usersRoutes.slice(2, 3).map((user, index) => (
                    <Link key={index} to={user.path}><button className=''>{user.label}</button></Link>
                ))}
            </div>
            <header>
                {branding.map((brand) => (
                        <Link to="/" className='branding' key={brand.name}>
                            <img style={brand.styleLogo} src={brand.img} alt={brand.name}/>
                            <h4 dangerouslySetInnerHTML={{ __html: brand.name }} />
                        </Link>
                ))}
                <nav>
                    <ul>
                        {siteRoute.map((route, index) => (
                            <li><Link key={index} to={route.path}>{route.label}</Link></li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavbarComponent;
