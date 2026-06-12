type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
export const Title = ({children, className}: TitleProps) => (
  <span className={`font-bold text-3xl ${className}`}>{children}</span>
);
