import { Divider, Text, Title } from '@mantine/core';
import classes from './footer.module.css';

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title order={1} className={classes.title}>
          Carina & Daniel
        </Title>
        <Divider my="md" classNames={{ root: classes.divider }} />
        <Title order={2} className={classes.date}>
          11.23.2026
        </Title>
        <Text className={classes.finalText}>I should've used WIX or something</Text>
      </div>
    </div>
  );
}
