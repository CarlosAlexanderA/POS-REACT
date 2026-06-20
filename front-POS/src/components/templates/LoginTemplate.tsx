import {useAuthStore, useCompnayStore} from '../../store';
import {v} from '../../styles';
import {Divider} from '../atoms/Divider';
import {InputText} from '../atoms/InputText';
import {Title} from '../atoms/Title';
import {BtnSave} from '../molecules/BtnSave';
import {Footer} from '../organisms/Footer';

export const LoginTemplate = () => {
  const {loginGoogle} = useAuthStore();
  const {insertCompany} = useCompnayStore();
  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col gap-6 items-center w-2xs sm:w-sm md:w-md h-full justify-center">
        <Title className="pb-6">Ingresar</Title>
        <form action="" className="w-full flex flex-col gap-6 ">
          <InputText type="email" placeholder="Email..." />
          <InputText type="password" placeholder="Password..." />
          <BtnSave title={'Enviar'} />
        </form>
        <Divider>
          <span className="text-lg font-bold relative z-20 bg-(--bg) px-2">
            O
          </span>
        </Divider>
        <BtnSave
          func={loginGoogle}
          title={'Google'}
          icon={v.iconogoogle}
          className="px-16 bg-white text-black border-zinc-200 border-2 hover:bg-zinc-200 w-fit"
        />
        <BtnSave
          title="Insertar"
          func={async () => {
            const param = {
              name: 'prueba 2',
            };
            await insertCompany(param);
          }}
        />
      </div>

      <Footer />
    </section>
  );
};

// <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
