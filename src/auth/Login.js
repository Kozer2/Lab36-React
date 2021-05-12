import { Redirect } from 'react-router';
import { useAuth } from '../contexts/auth';


export default function Login() {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>Username <input type="text" name="username" /></label>
          <label>Password <input type="password" name="password" /></label>
          <button>Log In</button>
        </form>
      );
} 











// export default function Login() {
//     const { user, login, logout } = useAuth();

//     if (user) {
//         function handleLogout() {
//             logout();
//         }

//         return (
//             <button onClick={handleLogout}>Log Out</button>
//         )
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();

//         const { target } = e;
//         const { username, password } = target.elements;


//         if (!await login(username.value, password.value)) {
            
//             target.reset();
//         } else {
//             // redirct to the homepage
            //   Redirct('./Home');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//           <label>Username <input type="text" name="username" /></label>
//           <label>Password <input type="password" name="password" /></label>
//           <button>Log In</button>
//         </form>
//       );
// }