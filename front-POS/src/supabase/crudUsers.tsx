import {supabase} from './supabase.config';

type User = {
  name?: string;
  doc_type_id?: number;
  num_doc?: string;
  phone?: string;
  rol_id?: number;
  email?: string;
  date?: Date;
  address?: string;
  state?: string;
  auth_id?: string;
};

const table = 'users';
export async function showUsers(p: User) {
  const {data} = await supabase
    .from(table)
    .select()
    .eq('auth_id', p.auth_id)
    .maybeSingle();

  return data;
}
