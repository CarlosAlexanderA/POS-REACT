import {supabase} from './supabase.config';

const table = 'roles';
export async function showRolByName(p: {name: string}) {
  const {data} = await supabase
    .from(table)
    .select()
    .eq('name', p.name)
    .maybeSingle();

  return data;
}
