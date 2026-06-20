import type {IconType} from 'react-icons';
import {twMerge} from 'tailwind-merge';

type ButtonProps = {
  icon?: IconType;
  title?: string;
  className?: string;
  func?: () => Promise<void>;
  url?: string;
};

// import type {ButtonHTMLAttributes} from 'react';

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const BtnSave = ({icon: Icon, title, className, func}: ButtonProps) => {
  // console.log('apiurl_ : ', import.meta.env.VITE_APP_SUPABASE_PUBLISH_KEY);

  return (
    <button
      className={twMerge(
        `cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transform-fill mt-4 flex flex-row justify-center items-center gap-5 border`,
        className,
      )}
      type="submit"
      onClick={func}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      <span>{title}</span>
    </button>
  );
};
