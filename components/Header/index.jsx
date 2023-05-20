import React, { useEffect, useState } from 'react';

import Navbar from '../Navbar';
import ThemeSwitcher from '../ThemeSwitcher';
import Logo from '../Logo';

import css from './Header.module.scss';
import Link from 'next/link';

const Header = ({ pages }) => {
  const [mounted, setMounted] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [headerStyle, setHeaderStyle] = useState(css.header);
  const headerStyles = {
    top: `${css.header}`,
    hidden: `${css.header} ${css.hidden}`,
    visible: `${css.header} ${css.background}`,
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll) setHeaderStyle(headerStyles.hidden);
    else if (currentScroll < 200) {
      setHeaderStyle(headerStyles.top);
      return;
    } else setHeaderStyle(headerStyles.visible);

    setPrevScroll(currentScroll);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  window.addEventListener('scroll', handleScroll);

  return (
    <header id="top" className={headerStyle}>
      <div className={css.container}>
        <div className={css.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Navbar pages={pages} />
        <div className={css.themeSwitcher}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
