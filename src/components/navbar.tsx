import { Button, Group } from '@mantine/core';

import NameCard from './namecard';
import classes from './navbar.module.css';

type Link = {
  link: string;
  label: string;
};

const links: Link[] = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/our-story', label: 'Our Story' },
];

function NavBar() {
  console.log('displaying navbar');
  const navItems = links.map((link) => (
    <a className={classes.navItem} href={link.link} key={link.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.navbar}>
      <Group justify="space-between" h="100%">
        <Group gap="lg">{navItems}</Group>
        <NameCard />
        <Button className={classes.rsvpButton} component="a" href="/rsvp">
          RSVP
        </Button>
      </Group>
    </header>
  );
}

export default NavBar;
