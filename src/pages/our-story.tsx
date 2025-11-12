import { Text, Title } from '@mantine/core';
import classes from './our-story.module.css';

function OurStoryPage() {
  return (
    <div className={classes.page}>
      <Title order={1}>Our Story</Title>
      <Text>
        Carina and Daniel first met in 2017 — and a few months later, Carina “accidentally”
        Snapchatted Daniel (sure, Carina 👀). That little slip turned into something much bigger,
        and the rest is history.
      </Text>
      <br />
      <Text>
        That summer, when Carina was deciding which university to attend, Daniel did everything he
        could to convince her to stay in Calgary — even pulling out the ultimate bribe: Wow Chicken.
        (For the record, that was not the reason she stayed… or so she claims.) A semester later, in
        January 2018, they made it official.
      </Text>
      <br />
      <Text>
        Together, Carina and Daniel complement each other perfectly — Carina being the absolute
        type-A (everything needs to be her way), and Daniel enjoying life as it comes, the patient
        Buddha he is. Since then, they’ve travelled to 8 countries, bought a home together, and
        adopted two little monsters — Yumi and Maya — who keep life entertaining (and occasionally
        chaotic). When they’re not planning their next trip, you’ll find them doom-scrolling on
        TikTok and Instagram, chasing Yumi and Maya around the house, or napping (their true shared
        hobby).
      </Text>
      <br />
      <Text>
        After seven long years of patient waiting from Carina, Daniel finally popped the question in
        November 2024. About time! Now, they can’t wait to say “I do” in Chiang Mai and celebrate
        with their favorite people — surrounded by good food, laughter, and probably a few happy
        tears (mostly from Carina).
      </Text>
    </div>
  );
}

export default OurStoryPage;
