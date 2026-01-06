import { Text, Title } from '@mantine/core';
import classes from './dress-code.module.css';

export default function DressCodePage() {
  return (
    <div className={classes.page}>
      <Title order={2}>Dress Code</Title>
      <Text className={classes.placeholder}>
        Details coming soon. For now, for the wedding portion, if you're a girl, don't wear white 👻
      </Text>
    </div>
  );
}
