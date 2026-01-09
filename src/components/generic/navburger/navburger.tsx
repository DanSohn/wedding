import { Burger, Menu } from '@mantine/core';

import classes from './navburger.module.css';

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

function NavBurger() {
  const navItems = links.map((link) => (
    <Menu.Item component="a" className={classes.navItem} href={link.link} key={link.link}>
      {link.label}
    </Menu.Item>
  ));

  return (
    <Menu
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right', duration: 500 }}
      classNames={{
        dropdown: classes.dropdown,
        item: classes.item,
      }}
    >
      <Menu.Target>
        <Burger
          size="sm"
          aria-label="Toggle navigation menu"
          classNames={{
            root: classes.burger,
          }}
        />
      </Menu.Target>
      <Menu.Dropdown>{navItems}</Menu.Dropdown>
    </Menu>
  );
}

export default NavBurger;
