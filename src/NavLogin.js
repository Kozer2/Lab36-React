import {NavLink } from 'react-router-dom';
import {useAuth} from './contexts/auth';

export default function NavLogin(props) {
    const auth = useAuth();
    console.log(auth);
    const { user } = auth;
    console.log(user);

    if (user) {
        return (
            <li>{user.username}</li>
        );
    }

    return (
        <>
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
    )
}