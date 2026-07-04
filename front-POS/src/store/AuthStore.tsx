import {create} from 'zustand';
import type {User} from '@supabase/supabase-js';
import {
  insertAdmin,
  insertCompany,
  showRolByName,
  showTypeDoc,
  showUsers,
  supabase,
  type UserProps,
} from '../supabase';

interface AuthStore {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
  initAuth: () => Promise<() => void>;

  loginGoogle: () => Promise<void>;
  cerrarSesion: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  setUser: (user) => set({user}),

  loginGoogle: async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    console.log(data);
  },
  cerrarSesion: async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    }
  },
  initAuth: async () => {
    //? iniciar session
    try {
      const {
        data: {session},
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.log(error.message);
        return () => {};
      }
      set({user: session?.user ?? null});
      const {data} = supabase.auth.onAuthStateChange((event, session) => {
        console.log('EVENT: ', event);
        set({user: session?.user ?? null});
        console.log('session: ', session?.user);

        if (session) {
          const getUsers = async () => {
            const authId = session?.user.id;
            const users = await showUsers({auth_id: authId});

            console.log('user Res: ', users);

            if (!users) {
              const resCompany = await insertCompany({
                name: 'Generica',
                auth_id: authId,
              });
              console.log('company: ', resCompany);

              const resTypeDoc = await showTypeDoc({company_id: resCompany.id});
              // traer el rol id promise
              const resRol = await showRolByName({name: 'superadmin'});
              const pUser: UserProps = {
                doc_type_id: resTypeDoc![0].id,
                rol_id: resRol.id,
                email: session.user.email!,
                registration_date: new Date(),
                auth_id: authId,
              };

              await insertAdmin(pUser);
            }
          };
          getUsers();
        }
      });
      return () => {
        data.subscription.unsubscribe();
      };
    } catch (error) {
      console.log(error);
      return () => {};
    }

    //* ecuchar cambios
  },
}));

//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
//! 4:49:00
