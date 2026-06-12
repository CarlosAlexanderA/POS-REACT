import {GiPadlock} from 'react-icons/gi';

export const Footer = () => {
  return (
    <footer className="flex flex-col text-xs text-zinc-400 gap-1.5 px-5 sm:px-10 ">
      <section className="border-b border-slate-400 flex items-center gap-1.5 ">
        <GiPadlock />
        <span className="mt-1.5">
          Esta es una página segura de codigo369. Si tienes dudas sobre la
          autenticidad de la web, comunícate con
          <br /> nosotros al 311-9898 o a través de nuestros medios digitales.
        </span>
      </section>
      <section className="flex justify-between ">
        <span>StockPRO S.A - RUC: 20100047218</span>
        <div className="w-px bg-slate-400 mt-1 h-4/5 flex items-center"></div>
        <span>Todos los derechos reservados</span>
        <div className="w-px bg-slate-400 mt-1 h-4/5 flex items-center"></div>
        <span>© 2023 codigo369.com</span>
      </section>
    </footer>
  );
};
