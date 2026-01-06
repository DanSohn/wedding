import { Title, Text } from '@mantine/core';
import classes from './travel-accommodation.module.css';

export default function TravelAccommodationPage() {
  return (
    <div className={classes.page}>
      <Title order={2}>Travel & Accommodation</Title>
      <Text className={classes.placeholder}>Information coming soon.</Text>
    </div>
  );
}
