import { Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import classes from './our-story.module.css';

function OurStoryPage() {
  return (
    <Container size="sm" className={classes.page}>
      <Stack gap={64}>
        <Title order={1} ta="center">
          Our Story
        </Title>

        {/* Chapter 1 – Image Right */}
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              Carina and Daniel first met in 2017 — and a few months later, Carina “accidentally”
              snapchatted Daniel (sure, Carina 👀). That little slip turned into something much
              bigger, and the rest is history.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-look-each-other.jpg"
              alt="Carina and Daniel on dates"
              radius="md"
              fit="cover"
            />
          </Grid.Col>
        </Grid>

        {/* Chapter 2 – Image Left */}
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-travel.jpg"
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
              claims.) A semester later, in January 2018, they made it official.
            </Text>
          </Grid.Col>
        </Grid>

        {/* Chapter 3 – Image Right */}
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Text>
              Together, Carina and Daniel complement each other perfectly — Carina being the
              absolute type-A (everything needs to be her way), and Daniel enjoying life as it
              comes, the patient Buddha he is. Since then, they’ve travelled to 8 countries, bought
              a home together, and adopted two little monsters — Yumi and Maya — who keep life
              entertaining (and occasionally chaotic).
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Image
              src="carina-daniel-home.jpg"
              alt="Carina and Daniel with Yumi and new house"
              radius="md"
              fit="cover"
            />
          </Grid.Col>
        </Grid>

        {/* Chapter 4 – Image Left */}
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
