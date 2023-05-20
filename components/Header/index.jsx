import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import Navbar from '/components/Navbar';
import ThemeSwitcher from '/components/ThemeSwitcher';

import css from './Header.module.scss';

import LogoLight from '../../public/logo-light.png';
import LogoDark from '../../public/logo-dark.png';

const Header = ({ pages }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const [prevScroll, setPrevScroll] = useState(0);

  const [headerStyle, setHeaderStyle] = useState(css.header);
  const headerStyles = {
    top: `${css.header}`,
    hidden: `${css.header} ${css.hidden}`,
    visible: `${css.header} ${css.background}`,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll) setHeaderStyle(headerStyles.hidden);
    else if (currentScroll < 200) {
      setHeaderStyle(headerStyles.top);
      return;
    } else setHeaderStyle(headerStyles.visible);

    setPrevScroll(currentScroll);
  };

  if (!mounted) return null;

  window.addEventListener('scroll', handleScroll);

  return (
    <header id="top" className={headerStyle}>
      <div className={css.container}>
        <div className={css.logo}>
          <Link href="/">
            {theme === 'light' ? (
              <Image src={LogoLight} alt="Blog logo" />
            ) : (
              <Image src={LogoDark} alt="Blog logo" />
            )}
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
