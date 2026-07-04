import {supabase} from './supabase.config';

type TypeDocProps = {
  id: number;
  name?: string;
  company_id: number;
};

type ShowTypeDocProps = {
  company_id: number;
};

const table = 'type_document';
export async function showTypeDoc(p: ShowTypeDocProps) {
  const {data} = await supabase
    .from(table)
    .select()
    .eq('company_id', p.company_id);

  return data;
}
