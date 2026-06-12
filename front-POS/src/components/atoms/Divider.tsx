type DividerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Divider = ({children, className = ''}: DividerProps) => (
  <div
    className={`mx-2  h-px my-6 bg-(--border) w-full flex items-center justify-center relative z-10 ${className} `}
  >
    {children}
  </div>
);
