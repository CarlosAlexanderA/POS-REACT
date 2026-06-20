import {create} from 'zustand';
import type {User} from '@supabase/supabase-js';
import {supabase} from '../supabase';

interface AuthStore {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
  initAuth: () => Promise<void>;

  loginGoogle: () => Promise<void>;
  cerrarSesion: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  setUser: (user) => set({user}),

  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  },
  cerrarSesion: async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    }
  },
  initAuth: async () => {
    //? iniciar session
    const {
      data: {session},
    } = await supabase.auth.getSession();
    set({user: session?.user ?? null});

    //* ecuchar cambios
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('EVENT: ', event);
      set({user: session?.user ?? null});
    });
  },
}));
