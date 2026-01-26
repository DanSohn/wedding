import { Anchor, Table, Text, Title } from '@mantine/core';
import classes from './travel-accommodation.module.css';

const FloraCreekRooms = [
  {
    name: 'Superior Garden View',
    inventory: 8,
    price: '3,500 THB',
    link: 'https://floracreekchiangmai.com/rooms/supeior-room-garden-view',
  },
  {
    name: 'Deluxe Plantation',
    inventory: 42,
    price: '4,200 THB',
    link: 'https://floracreekchiangmai.com/rooms/deluxe-boutique-hotel-bathtub',
  },
  {
    name: 'Executive Horizon',
    inventory: 14,
    price: '5,000 THB',
    link: 'https://floracreekchiangmai.com/rooms/executive-horizon-boutique-resort-bathtub',
  },
  {
    name: 'Pool Villa',
    inventory: 6,
    price: '9,000 THB',
    link: 'https://floracreekchiangmai.com/rooms/private-pool-villa',
  },
];

const FloraCreekRoomTable = () => {
  const rows = FloraCreekRooms.map((room) => (
    <Table.Tr key={room.name}>
      <Table.Td>
        <Anchor href={room.link} target="_blank" underline="hover">
          {room.name}
        </Anchor>
      </Table.Td>
      <Table.Td>{room.inventory}</Table.Td>
      <Table.Td>{room.price}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table className={classes.table}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Room Type</Table.Th>
          <Table.Th>Number of Rooms</Table.Th>
          <Table.Th>Discounted Price (per night)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

const TravelAndFlights = () => (
  <section>
    <Title order={1}>Travel & Flights</Title>

    <div className={classes.question}>
      <Title order={3}>When should I book my flights?</Title>
      <Text>
        We recommend booking flights at least 6–8 months in advance to get the best fares and
        options.
      </Text>
    </div>

    <div className={classes.question}>
      <Title order={3}>When should I arrive to Chiang Mai?</Title>
      <Text>
        We recommend arriving by November 20th to attend the welcome party and have ample time to
        settle in before the wedding day. (Jetlag will be rough)
      </Text>
    </div>

    <div className={classes.question}>
      <Title order={3}>Which airport should I fly into?</Title>
      <Text>
        The closest major airport is Chiang Mai International Airport (CNX). From there, you can
        take a taxi to the city, or rent a scooter if you’re adventurous!
      </Text>
    </div>

    <div className={classes.question}>
      <Title order={3}>Will transportation be provided from the airport to the hotel/venue?</Title>
      <Text>
        We will share group transportation options closer to the date, or you can take a taxi or
        rideshare directly to the hotel.
      </Text>
    </div>
  </section>
);

const Accommodation = () => (
  <section>
    <Title order={1}>Accommodation</Title>

    <div className={classes.question}>
      <Title order={3}>Where should I stay?</Title>
      <Text>
        We recommend guests to stay at{' '}
        <Anchor href="https://floracreekchiangmai.com/" target="_blank" underline="hover">
          Flora Creek
        </Anchor>{' '}
        with us. Please look at the link to check the different types of rooms. To book a room,
        please contact the hotel directly via email at{' '}
        <Anchor href="mailto:rsvn@floracreekchiangmai.com">rsvn@floracreekchiangmai.com</Anchor> and
        mention the discount code{' '}
        <span className={classes.discountCode}>WEDDING CARINA & DANIEL</span>. Note that that are
        limited number of rooms available, so please book early to secure your stay. However, There
        are still several hotels and resorts in and around Chiang Mai that are amazingly beautiful
        and convenient.
      </Text>
    </div>

    <div className={classes.question}>
      <Title order={3}>
        Can you give more information on the number of rooms and discounts available for Flora
        Creek?
      </Title>
      <Text>The resort contains the following number of rooms:</Text>
      <FloraCreekRoomTable />
    </div>

    <div className={classes.question}>
      <Title order={3}>What if I want to stay somewhere else?</Title>
      <Text>
        There are still several hotels and resorts in and around Chiang Mai that are amazingly
        beautiful and convenient. We recommend using Google to look around at Hotels around Chiang
        Mai city
      </Text>
    </div>

    <div className={classes.question}>
      <Title order={3}>When should we book?</Title>
      <Text>We recommend booking early to secure your preferred accommodation.</Text>
    </div>
  </section>
);

export default function FaqPage() {
  return (
    <div className={classes.page}>
      <TravelAndFlights />
      <Accommodation />
    </div>
  );
}
