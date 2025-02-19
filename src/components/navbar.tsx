import { Box, Group } from '@mantine/core';

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
    <a href={link.link} key={link.link}>
      {link.label}
    </a>
  ));

  return (
    <Box>
      <header>
        <Group justify="space-between" h="100%">
          <Group>{navItems}</Group>
          <div> Helo world</div>
          <div> RSVP </div>
        </Group>
      </header>
    </Box>
  );
}

export default NavBar;
