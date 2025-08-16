import { Divider, Group, Stack, Text, Title } from '@mantine/core';
import classes from './home.module.css';

const EventCard = ({ children }: { children: React.ReactNode }) => (
  <Group justify="center" grow={true} gap="xl" align="flex-start" className={classes.eventDetails}>
    {children}
  </Group>
);

const EventDetails = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.rightSideDetails}>{children}</div>
);

function HomePage() {
  return (
    <div className={classes.page}>
      <Group justify="center" className={classes.mainInfo}>
        <Title order={1}>November 22, 2026</Title>
        <Divider orientation="vertical" />
        <Title order={1}>Chiang Mai Thailand</Title>
      </Group>

      <Stack>
        <Stack>
          <Title order={1}>Wedding Day</Title>
          <Title order={2}>Sunday November 22, 2026</Title>
          <Title order={3}>3:00 PM - 10:30 PM</Title>

          <Text>Chiang Mai, Thailand</Text>
          <Text>The Heritage House & Garden</Text>
          <Text>120 Nam Phrae, Hang Dong District, Chiang Mai 50230, Thailand</Text>
        </Stack>
        <Divider />
        <Stack>
          <EventCard>
            <Title order={3} className={classes.time}>
              3:00 PM
            </Title>
            <EventDetails>
              <Title order={3}>Ceremony</Title>
              <Text>The Heritage House & Garden</Text>
              <Text>Ceremony will begin promptly at 3:00 PM</Text>
            </EventDetails>
          </EventCard>
        </Stack>

        <Divider />

        <Stack>
          <EventCard>
            <Title order={3} className={classes.time}>
              4:00 PM
            </Title>
            <EventDetails>
              <Title order={3}>Cocktail Hour</Title>
              <Text>Enjoy drinks and appetizers</Text>
            </EventDetails>
          </EventCard>
        </Stack>

        <Divider />

        <Stack>
          <EventCard>
            <Title order={3} className={classes.time}>
              5:00 PM
            </Title>
            <EventDetails>
              <Title order={3}>Reception</Title>
              <Text>Join us for dinner and dancing</Text>
            </EventDetails>
          </EventCard>
        </Stack>

        <Divider />
      </Stack>

      <Text className={classes.gratefulText}>
        We are so grateful and excited to celebrate our special day with you. Please explore our
        wedding website for logistics, lodging, FAQs, registry information and more. Feel free to
        reach out if you have any questions!
      </Text>
    </div>
  );
}

export default HomePage;
