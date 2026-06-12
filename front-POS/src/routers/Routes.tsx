import {Route, Routes} from 'react-router-dom';
import {Home, Login} from '../pages';
import {ProtectedRoute} from '../hooks';
export function MyRoutes() {
  return (
    <Routes>
      {/* //? si esta logeado no debe acceder aqui */}
      <Route element={<ProtectedRoute redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
