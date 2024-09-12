import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export const MyLink: FC<{ className?: string, to: string, children: ReactNode }> = ({ className, to, children }) => {
  return (
    <Link className={`relative italic font-bold duration-300 before:absolute before:h-px before:w-0 before:duration-300 before:top-full hover:before:w-full ${className ?? ''}`} to={to}>
      {children}
    </Link>
  )
}