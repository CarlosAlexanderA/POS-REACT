import {useAuthStore} from '../../store';

export const HomeTemplate = () => {
  const {cerrarSesion, user} = useAuthStore();
  // console.log(user);

  return (
    <div>
      <p>HomeTemplate</p>
      <span>{user?.user_metadata.name}</span>
      <button
        onClick={cerrarSesion}
        className="bg-red-400 px-4 py-2 cursor-pointer hover:bg-red-500/80"
      >
        Cerrar
      </button>
    </div>
  );
};
