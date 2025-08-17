import { Divider, Text, Title } from '@mantine/core';
import classes from './footer.module.css';

export default function Footer() {
  return (
    <div className={classes.container}>
      <Title order={1}>Carina & daniel</Title>
      <Divider my="md" classNames={{ root: classes.divider }} />
      <Title order={2}>22.11.26</Title>
      <Text className={classes.finalText}>I should've used WIX or something</Text>
    </div>
  );
}
