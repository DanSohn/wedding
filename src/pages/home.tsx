import { Container, Image, Text } from '@mantine/core';
import classes from './home.module.css';

function HomePage() {
  return (
    <Container size="sm" className={classes.page}>
      <Text className={classes.gratefulText}>
        We want to take this opportunity to express our appreciation and gratitude for you. Whether
        you have been here since day 1 of our journey or joined us somewhere along the way, we want
        to say thank you for showing up and supporting us. It would mean the world to both of us for
        you to be there on our special day and we cannot wait to celebrate with you!
      </Text>
      <Text className={classes.gratefulText}>
        Please explore our wedding website for logistics, lodging, FAQs, travel details and more.
        There will be excursions and other events planned around the wedding day as well, including
        a welcome party and a stunningly beautiful lantern festival.
      </Text>
      <Text className={classes.gratefulText}>
        Feel free to reach out if you have any questions! As Carina likes to say, be there or be
        square!!! (haha jk unless 👀🔪)
      </Text>
      <Image
        src="carina-daniel-sidewalk-yumi-maya.jpg"
        alt="Carina and Daniel with Yumi"
        radius="md"
        fit="cover"
      />
    </Container>
  );
}

export default HomePage;
