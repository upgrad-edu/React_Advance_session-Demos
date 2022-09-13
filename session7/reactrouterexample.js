
import { Routes, Route, Link, Navigate } from 'react-router-dom';
    const Home = ({ user }) => {
 if (!user) {
   return <Navigate to="/landing" replace />;
 }
 return <h2>Home (Protected: authenticated user required)</h2>;
};
const App = () => {
 const [user, setUser] = React.useState(null);
 const handleLogin = () => setUser({ id: '1', name: 'robin' });
 const handleLogout = () => setUser(null);
 return (
   <>
     <h1>React Router</h1>
     <Navigation />
         {user ? (
       <button onClick={handleLogout}>Sign Out</button>
     ) : (
       <button onClick={handleLogin}>Sign In</button>
     )}
     <Routes>
       <Route index element={<Landing />} />
       <Route path="landing" element={<Landing />} />
       <Route path="home" element={<Home user={user} />} />
       ...
     </Routes>
   </>
 );
};
