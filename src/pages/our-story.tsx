import { Text, Title } from '@mantine/core';
import classes from './our-story.module.css';

function OurStoryPage() {
  return (
    <div className={classes.page}>
      <Title order={1}>Our Story</Title>
      <Text>
        Carina fell in love with Daniel HARD, he asked her out, they got a dog and a cat and the
        rest is history
      </Text>
    </div>
  );
}

export default OurStoryPage;
