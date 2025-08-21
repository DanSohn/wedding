import { Text, Title } from '@mantine/core';
import classes from './our-story.module.css';

function OurStoryPage() {
  return (
    <div className={classes.page}>
      <Title order={1}>Our Story</Title>
      <Text>Carina fell in love with Daniel, he asked her out, and the rest is history</Text>
    </div>
  );
}

export default OurStoryPage;
