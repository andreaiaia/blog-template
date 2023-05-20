import React, { useEffect, useState } from 'react';

import {
  GitHub,
  Instagram,
  Linkedin,
  Dribbble,
  Twitter,
  Facebook,
  Rss,
} from 'react-feather';

import ThemeSwitcher from '/components/ThemeSwitcher';
import NotByAi from './NotByAi';

import css from './Footer.module.scss';

const BLOG = require('../../blog.config');

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const YEAR = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <ul className={css.links}>
          <li>
            <a href="/feed.xml">
              <Rss className={css.icon} alt="RSS feed" />
            </a>
          </li>
          {BLOG.SOCIALS.INSTAGRAM && (
            <li>
              <a href={BLOG.SOCIALS.INSTAGRAM} target="_blank">
                <Instagram className={css.icon} alt="Instagram profile" />
              </a>
            </li>
          )}
          {BLOG.SOCIALS.TWITTER && (
            <li>
              <a href={BLOG.SOCIALS.TWITTER} target="_blank">
                <Twitter className={css.icon} alt="Twitter profile" />
              </a>
            </li>
          )}
          {BLOG.SOCIALS.FACEBOOK && (
            <li>
              <a href={BLOG.SOCIALS.FACEBOOK} target="_blank">
                <Facebook className={css.icon} alt="Twitter profile" />
              </a>
            </li>
          )}
          {BLOG.SOCIALS.GITHUB && (
            <li>
              <a href={BLOG.SOCIALS.GITHUB} target="_blank">
                <GitHub className={css.icon} alt="Github profile" />
              </a>
            </li>
          )}
          {BLOG.SOCIALS.DRIBBBLE && (
            <li>
              <a href={BLOG.SOCIALS.DRIBBBLE} target="_blank">
                <Dribbble className={css.icon} alt="Dribbble profile" />
              </a>
            </li>
          )}
          {BLOG.SOCIALS.LINKEDIN && (
            <li>
              <a href={BLOG.SOCIALS.LINKEDIN} target="_blank">
                <Linkedin className={css.icon} alt="LinkedIn profile" />
              </a>
            </li>
          )}
        </ul>
        <small className={css.credits}>
          <time>{YEAR}</time> © {BLOG.OWNER.FIRST_NAME} {BLOG.OWNER.LAST_NAME}.
        </small>
        <div>
          <ThemeSwitcher cname={css.switcherStyle} />
        </div>
        <div className={css.notAiBadge}>
          <a href="https://notbyai.fyi/">
            <NotByAi />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
