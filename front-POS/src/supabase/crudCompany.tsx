import Swal from 'sweetalert2';
import {supabase} from './supabase.config';

export type CompanyProps = {
  name: string;
  fiscal_id?: string;
  tax_address?: string;
  logo?: string;
  currency?: string;
  auth_id?: string;
};

const table = 'company';

export async function insertCompany(p: CompanyProps) {
  const {data, error} = await supabase
    .from(table)
    .insert(p)
    .select()
    .maybeSingle();

  // if (error) {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: error.message,
  //   });
  //   return;
  // }
  return data;
}
