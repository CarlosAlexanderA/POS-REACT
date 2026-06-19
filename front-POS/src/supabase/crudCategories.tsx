import Swal from 'sweetalert2';
import {supabase} from './supabase.config';

type Category = {
  name: string;
  description?: string;
  state: string;
};

const tableCateg = 'categories';

export async function insertCategories(p: Category, file?: File | undefined) {
  const {error, data} = await supabase.rpc('insertCategories', p);

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    return;
  }
  if (file) {
    const new_id = data;
    const urlImage = await uploadImage(new_id, file);
    const pIconUpdate = {
      icon: urlImage?.publicUrl,
      id: new_id,
    };

    await updateIconCategories(pIconUpdate);
  }
}

async function uploadImage(idCategory: number, file?: File) {
  const route = 'categories/' + idCategory;
  const {data, error} = await supabase.storage
    .from('images')
    .upload(route, file, {
      cacheControl: '0',
      upsert: true,
    });
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    return;
  }

  if (data) {
    const {data: urlImage} = await supabase.storage
      .from('images')
      .getPublicUrl(route);
    return urlImage;
  }
}

async function updateIconCategories(p: {id: number; icon?: string}) {
  const {error} = await supabase.from('categories').update(p).eq('id', p.id);
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    return;
  }
}

export async function showCategories(p: {company_id: number}) {
  const {data} = await supabase
    .from(tableCateg)
    .select()
    .eq('company_id', p.company_id)
    .order('id', {ascending: false});
  return data;
}

// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
// ! 4:04:00
