import AuthUser from "../../api/AuthUser"
import Login from "../Users/Login";

const Dashboard = () => {
    const {getToken} = AuthUser();

    if(!getToken()) {
        return <Login/>
    } 

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard