import {useLocation} from 'react-router-dom';
import {SideBar} from './components';
import {MyRoutes} from './routers';
import {useAuthStore, useThemeStore} from './store';
import clsx from 'clsx';
import {useEffect, useState} from 'react';
import {Login} from './pages';

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const {isOpen} = useAsideStore();
  const [isOpen, setisOpen] = useState(false);
  const {theme} = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  useAuthStore.getState().initAuth();

  // ? obteniendo la ruta para eliminar el sidebar en login o sign in
  const location = useLocation();

  //* ocultar el sidebar
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signIn';

  return (
    <main
      className={clsx(
        `min-h-screen w-screen grid relative text-(--text)`,
        isAuthPage
          ? 'grid-cols-1'
          : isOpen
            ? 'md:grid-cols-[220px_1fr]'
            : 'md:grid-cols-[88px_1fr]',
      )}
    >
      {!isAuthPage && (
        <section className="sideBar hidden md:block w-full bg-(--bg) relative ">
          <SideBar state={isOpen} setState={setisOpen} />
        </section>
      )}

      <section className="menuHambur md:hidden bg-(--bg) absolute  h-10 w-full"></section>
      <section className="routers bg-(--bg) w-full">
        <MyRoutes />
      </section>
    </main>
  );
}

export default App;

//! https://www.youtube.com/watch?v=URG4rnmdThs&t=441s

//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
//! 2:42:00
