import { Group } from '@mantine/core';

import classes from './navbar.module.css';

type Link = {
  link: string;
  label: string;
};

const links: Link[] = [
  { link: '/home', label: 'Home' },
  { link: '/our-story', label: 'Our Story' },
  { link: '/itinerary', label: 'Itinerary' },
  { link: '/dress-code', label: 'Dress Code' },
  { link: '/travel-accommodation', label: 'Travel / Accommodation' },
  { link: '/rsvp', label: 'RSVP' },
  { link: '/about-chiang-mai', label: 'About Chiang Mai' },
  { link: '/faq', label: 'Q + A' },
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
