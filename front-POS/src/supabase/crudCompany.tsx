import Swal from 'sweetalert2';
import {supabase} from './supabase.config';

export type Company = {
  name: string;
  fiscal_id?: string;
  tax_address?: string;
  logo?: string;
  currency?: string;
};

const table = 'company';

export async function insertCompany(p: Company) {
  const {data, error} = await supabase
    .from(table)
    .insert(p)
    .select()
    .maybeSingle();

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    return;
  }
  return data;
}
