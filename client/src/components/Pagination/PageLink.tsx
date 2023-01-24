// import React, { HTMLProps } from "react";
// import cn from "classnames";

// type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

// const PageLink = ({ className, children,active,disabled, ...props }: Props) => {
//   return (
//     <a {...props} className={cn("page-link", className, {active, disabled})}>
//       {children}
//     </a>
//   );
// };

// export default PageLink;


import { HTMLProps } from 'react';
import cn from 'classnames';
import './PageLink.css';

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = cn('page-link', className, {
    active,
    disabled,
  });

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
