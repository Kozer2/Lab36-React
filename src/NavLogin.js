import {NavLink } from 'react-router-dom';
export default function NavLogin(props){
    const {user} = props;
    if(user){
        return (
            <li className="mr-auto">{user.name}</li>
        );
    }
    return (
        <>
        <li className="ml-auto" ><NavLink to = "/Login">Login</NavLink></li>
        <li className="ml-auto"><NavLink to = "/Register">Register</NavLink></li>
        </>
    );
}