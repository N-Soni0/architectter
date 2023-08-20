import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ListItemProps {
    className?: string
    children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ className, children }) => {
  return (
    <li className={twMerge('card bg-base-200 shadow-md flex-shrink-0 w-52 h-full duration-300  ', className)}>
        {children}
    </li>
  )
}

export default ListItem