import {supabase} from './supabase.config';

export type UserProps = {
  name?: string;
  doc_type_id: number | null;
  num_doc?: string;
  phone?: string;
  rol_id: number;
  email: string;
  registration_date: Date;
  address?: string;
  state?: string;
  auth_id: string;
};

const table = 'users';
export async function showUsers(p: {auth_id: string}) {
  const {data} = await supabase
    .from(table)
    .select()
    .eq('auth_id', p.auth_id)
    .maybeSingle();

  return data;
}

export async function insertAdmin(p: UserProps) {
  await supabase.from(table).insert(p);
}
