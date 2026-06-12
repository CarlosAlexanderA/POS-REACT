import {BrowserRouter} from 'react-router-dom';
import {SideBar} from './components';
import {MyRoutes} from './routers';
import {useAuthStore, useThemeStore} from './store';
import clsx from 'clsx';
import {useEffect, useState} from 'react';

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const {isOpen} = useAsideStore();
  const [isOpen, setisOpen] = useState(false);
  const {theme} = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  useAuthStore.getState().initAuth();

  return (
    <BrowserRouter>
      <main
        className={clsx(
          `min-h-screen w-screen grid grid-cols-1 relative text-(--text)`,
          isOpen ? 'md:grid-cols-[220px_1fr]' : 'md:grid-cols-[88px_1fr]',
        )}
      >
        <section className="sideBar hidden md:block w-full bg-(--bg) relative ">
          <SideBar state={isOpen} setState={setisOpen} />
        </section>
        <section className="menuHambur md:hidden bg-(--bg) absolute  h-10 w-full"></section>
        <section className="routers bg-(--bg) w-full ">
          <MyRoutes />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;

//! https://www.youtube.com/watch?v=URG4rnmdThs&t=441s

//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
//! 1:00:00
