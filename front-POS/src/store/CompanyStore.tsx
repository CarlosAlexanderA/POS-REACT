import {create} from 'zustand';
import {insertCompany as insertCompanyDB, type Company} from '../supabase';

interface CompanyStore {
  insertCompany: (p: Company) => Promise<void>;
}
export const useCompnayStore = create<CompanyStore>((set) => ({
  insertCompany: async (p) => {
    const res = await insertCompanyDB(p);

    console.log('respues company: ', res);
  },
}));
