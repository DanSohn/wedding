import { Divider, Group, Text, Title } from '@mantine/core';
import classes from './itinerary.module.css';

// const EventCard = ({ children }: { children: React.ReactNode }) => (
//   <Group justify="center" grow={true} align="flex-start" className={classes.eventCard}>
//     {children}
//   </Group>
// );

// const EventDetails = ({ children }: { children: React.ReactNode }) => (
//   <div className={classes.rightSideDetails}>{children}</div>
// );

export default function ItineraryPage() {
  return (
    <div className={classes.page}>
      <Title order={2}>Itinerary</Title>
      <Text className={classes.placeholder}>More scheduling details coming soon.</Text>
      <Text>
        Note that the excursions are optional! Feel free to go explore on your own or visit other
        countries after the wedding, but we would love to have you join us and spend time together.
      </Text>
      <Group justify="center" className={classes.mainInfo}>
        <Title order={2}>November 21</Title>
        <Divider orientation="vertical" />
        <Title order={2}>Welcome Party</Title>
      </Group>

      <Group justify="center" className={classes.mainInfo}>
        <Title order={2}>November 23</Title>
        <Divider orientation="vertical" />
        <Title order={2}>Wedding Ceremony</Title>
      </Group>

      <Group justify="center" className={classes.mainInfo}>
        <Title order={2}>November 24</Title>
        <Divider orientation="vertical" />
        <Title order={2}>Excursion 1 (TBD)</Title>
      </Group>
      <Group justify="center" className={classes.mainInfo}>
        <Title order={2}>November 25</Title>
        <Divider orientation="vertical" />
        <Title order={2}>Excursion 2: Lantern Festival</Title>
      </Group>

      {/* <Stack>
        <Stack>
          <Title order={1}>Wedding Day</Title>
          <Title order={2}>Monday November 23, 2026</Title>
          <Title order={3}>3:00 PM - 10:30 PM</Title>

          <Text>Chiang Mai, Thailand</Text>
          <Text>Venue Name</Text>
          <Text>Address of Venue</Text>
        </Stack>
        <Divider />
        <Stack>
          <EventCard>
            <Title order={3} className={classes.time}>
              3:00 PM
            </Title>
            <EventDetails>
              <Title order={3}>Ceremony</Title>
              <Text>Venue Name</Text>
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
      </Stack> */}
    </div>
  );
}
