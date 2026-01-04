import { Stack, Text, Title } from '@mantine/core';
import classes from './registry.module.css';

export default function RegistryPage() {
  return (
    <div className={classes.page}>
      <Title order={1}>Registry</Title>

      <Stack className={classes.blurb} gap="sm">
        <Text>We are so grateful to celebrate with you — your presence is the greatest gift.</Text>
        <Text>
          But if you'd like to give a gift, any amount can be sent to{' '}
          <a className={classes.emailLink} href="mailto:carinaxdaniel@gmail.com">
            carinaxdaniel@gmail.com
          </a>
          .
        </Text>
      </Stack>
    </div>
  );
}
