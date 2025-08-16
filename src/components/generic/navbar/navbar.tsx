import { Group } from '@mantine/core';

import classes from './navbar.module.css';

type Link = {
  link: string;
  label: string;
};

const links: Link[] = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/our-story', label: 'Our Story' },
  { link: '/registry', label: 'Registry' },
  { link: '/faq', label: 'Q + A' },
  { link: '/about-chiang-mai', label: 'About Chiang Mai' },
  { link: '/rsvp', label: 'RSVP' },
];

function NavBar() {
  const navItems = links.map((link) => (
    <a className={classes.navItem} href={link.link} key={link.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.navbar}>
      <Group justify="center" h="100%" gap="xl">
        {navItems}
      </Group>
    </header>
  );
}

export default NavBar;
