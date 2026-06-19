import {Navigate, Outlet} from 'react-router-dom';
import {useAuthStore} from '../store';

export const ProtectedRoute = ({redirectTo}: {redirectTo: string}) => {
  const user = useAuthStore((state) => state.user);

  // console.log('ProtectedRoute', {user});

  //? Mientras react hidrata la session
  if (user === undefined) {
    return <p>Cargando...</p>;
  }
  if (user === null) {
    return <Navigate replace to={redirectTo} />;
  }

  return <Outlet />;
};
