import { Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import classes from './our-story.module.css';

function OurStoryPage() {
  return (
    <Container size="sm" className={classes.page}>
      <Stack gap={64}>
        <Title order={1} ta="center">
          Our Story
        </Title>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <Text>
              Carina and Daniel first met in 2017 — and a few months later, Carina “accidentally”
              snapchatted Daniel (sure, Carina 👀). That little slip turned into something much
              bigger, and the rest is history.
            </Text>
          </Grid.Col>

          {/* <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-look-each-other.jpg"
              alt="Carina and Daniel on dates"
              radius="md"
              fit="cover"
            />
          </Grid.Col> */}
        </Grid>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-look-each-other.jpg"
              alt="Carina and Daniel travelling"
              radius="md"
              fit="cover"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              That summer, when Carina was deciding which university to attend, Daniel did
              everything he could to convince her to stay in Calgary — even pulling out the ultimate
              bribe: Wow Chicken. (For the record, that was not the reason she stayed… or so she
              claims.) He also managed to convince her to watch a horror movie with him —
              strategically placing his arm around her during the scary parts (Carina goes
              dokidoki). After spending countless hours eating out, watching movies, and studying
              together at the library, they finally started dating in January 2018 (a story for
              another day…).
            </Text>
          </Grid.Col>
        </Grid>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              Together, Carina and Daniel complement each other perfectly — Carina being the
              absolute type-A (everything needs to be her way), and Daniel enjoying life as it
              comes, the patient Buddha he is.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-italy-funny.jpg"
              alt="Carina and Daniel travelling"
              radius="md"
              fit="cover"
            />
          </Grid.Col>
        </Grid>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-maya-yumi.jpg"
              alt="Carina and Daniel with Yumi and new house"
              radius="md"
              fit="cover"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              Since then, they’ve been through long-distance, COVID, and graduating from university
              — growing side by side through it all. They’ve travelled to 8 countries together, fell
              in love with Thailand, decided that’s where they’d tie the knot, bought a home, and
              started their own mini family with two little monsters — Yumi and Maya — who keep life
              entertaining (and occasionally chaotic).
            </Text>
          </Grid.Col>
        </Grid>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              In the last few years, Carina has drowned herself in the Big 4 busy season, leaving
              Daniel and their kids home alone 🙁. Meanwhile, Daniel has dived deep into the world
              of software engineering. Despite their busy schedules, they always make time for each
              other and their shared love for travel adventures. If you ask them where they're going
              to next, most likely they'll already have 2-3 trips planned out (Our next trip is
              Thailand, Hong Kong and possibly Korea / Japan 😩).
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-travel.jpg"
              alt="Carina and Daniel travelling"
              radius="md"
              fit="cover"
            />
          </Grid.Col>
        </Grid>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-engage.jpg"
              alt="Carina and Daniel engagement"
              radius="md"
              fit="cover"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              After seven long years of patient waiting from Carina, Daniel finally popped the
              question in November 2024. About time! Now, they can’t wait to say “I do” in Chiang
              Mai and celebrate with their favorite people — surrounded by good food, laughter, and
              probably a few happy tears (mostly from Carina).
            </Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}

export default OurStoryPage;
