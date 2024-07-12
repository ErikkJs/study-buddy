import { Link } from '@remix-run/react';
import { cn } from '~/lib/utils';

import React from 'react'

const Header = ({ headerTitle, titleClassName, LinkLabel}: { headerTitle?: string; titleClassName?: string, LinkLabel:string}) => {
  return (
    <header className="flex items-center justify-between">
      {headerTitle ? (
        <h1 className={cn('text-18 font-bold antialiased', titleClassName)}>{headerTitle}</h1>
      ): <div />}
      <Link className="text-16 font-semibold text-gray-800 antialiased" to={'/discover'}>
      {LinkLabel}
      </Link>
    </header>
  )
}

export default Header