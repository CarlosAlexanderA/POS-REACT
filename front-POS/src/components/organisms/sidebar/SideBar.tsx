import {v} from '../../../styles';
import {LinksArray, SecondarylinksArray} from '../../../utils';
import {NavLink} from 'react-router-dom';
import {TogleTheme} from '../TogleTheme';
import clsx from 'clsx';
import {Divider} from '../../atoms/Divider';

interface SidebarProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({state, setState}: SidebarProps) => {
  return (
    <div className=" w-full ">
      {/* BUTTON */}
      <button
        onClick={() => setState((prev) => !prev)}
        className={clsx(
          ` fixed top-17.5 z-20 left-18.5 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 bg-(--card) text-(--subtitle) `,
          state && 'translate-x-32.5 rotate-180',
        )}
      >
        <v.iconoflechaderecha />
      </button>

      {/* SIDEBAR */}
      <aside
        className={clsx(
          ` fixed z-10 h-screen overflow-y-auto overflow-x-hidden pt-4 transition-all duration-200 text-(--text) bg-(--bg) border-r border-r-(--border)`,
          state ? 'w-55' : 'w-22',
        )}
      >
        {/* LOGO */}
        <div className=" flex gap-2 justify-center pb-16  w-full">
          <div
            className={clsx(
              ` w-7.5 flex items-center justify-center transition-all duration-300 `,
              state ? 'scale-100' : 'scale-150',
            )}
          >
            <img src={v.logo} className="w-full" />
          </div>

          {state && <h2 className="ml-2 font-bold text-2xl">StockPRO</h2>}
        </div>

        {/* LINKS */}
        {LinksArray.map(({icon: Icon, label, to}) => (
          <div
            key={label}
            className="relative mx-2 my-1 px-[5%] transition-all duration-300 hover:bg-(--card)"
          >
            <NavLink
              to={to}
              className={({isActive}) =>
                clsx(
                  `flex items-center h-15 relative`,
                  isActive &&
                    `text-orange-500 font-semibold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-orange-500`,
                )
              }
            >
              <div className="px-4 flex">
                <Icon className="text-[25px]" />
              </div>

              <span
                className={clsx(
                  `transition-all duration-300 whitespace-nowrap`,
                  state ? 'opacity-100' : 'opacity-0',
                )}
              >
                {label}
              </span>
            </NavLink>
          </div>
        ))}

        {/* DIVIDER */}
        <Divider />

        {SecondarylinksArray.map(({icon: Icon, label, to}) => (
          <div
            key={label}
            className=" relative mx-2 my-1 px-[5%] transition-all duration-300 hover:bg-(--card)"
          >
            <NavLink
              to={to}
              className={({isActive}) =>
                clsx(
                  ` flex items-center h-15 relative`,
                  isActive &&
                    `text-orange-500 font-semibold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-orange-500`,
                )
              }
            >
              {/* ICON */}
              <div className="px-4 flex">
                <Icon className="text-[25px]" />
              </div>

              {/* LABEL */}
              <span
                className={clsx(
                  ` transition-all duration-300 whitespace-nowrap `,
                  state ? 'opacity-100' : 'opacity-0',
                )}
              >
                {label}
              </span>
            </NavLink>
          </div>
        ))}

        <TogleTheme />

        {/* {state && <SidebarCard />} */}
      </aside>
    </div>
  );
};
