import { Container, Grid, Image, Paper, Text, Title } from '@mantine/core';

const sections = [
  {
    title: 'The Rose of the North',
    text: `Chiang Mai is often called “The Rose of the North”—a city where time seems to slow down. Within its old city walls, golden temples rise above quiet streets, \
        monks in saffron robes pass by on their morning walks, and the air carries the faint scent of incense.

        But Chiang Mai is also alive with color and energy. Lanterns sway in the night breeze, markets buzz with laughter, and cafés spill out onto leafy corners. \
        It’s a place that blends history with modern charm, where you can spend a morning exploring centuries-old temples and an evening sipping cocktails by the river.

        More than anything, Chiang Mai has a way of making visitors feel instantly at ease—like you’ve stepped into a home away from home.`,
    image: 'chiang-mai-temple.jpg',
    bg: 'rgba(255, 250, 245, 0.8)', // soft cream
  },
  {
    title: 'Nature & Adventure',
    text: `Beyond the city lies northern Thailand’s breathtaking landscape. Misty mountains surround Chiang Mai like gentle guardians, \
          and winding roads lead to rice terraces, waterfalls, and hidden hill tribe villages.

          For animal lovers, elephant sanctuaries offer a once-in-a-lifetime chance to get close to these gentle giants—feeding them, \
          walking alongside them, and learning about the care that goes into protecting them.

          Whether it’s hiking through lush forests, taking a hot-air balloon ride at sunrise, or simply watching the clouds roll across \
          the hills, Chiang Mai’s nature invites you to slow down, breathe deeply, and marvel at the beauty of the world.`,
    image: 'chiang-mai-elephants.jpeg',
    bg: 'rgba(255, 245, 240, 0.8)', // blush
  },
  {
    title: 'A City to Remember',
    text: `Every corner of Chiang Mai tells a story. The night bazaars glow with hundreds of stalls, each offering handmade treasures, \
        street food sizzling on open grills, and music that drifts into the warm night air.

        Food is an adventure in itself—spicy curries, fragrant herbs, and northern Thai specialties that you won’t find anywhere else in \
        the country. Cooking classes, street markets, and tiny family-run restaurants all invite you to taste Chiang Mai’s heart.

        And then there are the moments that can’t be captured on a postcard: releasing a lantern into the sky, sharing laughter with friends \
        at a market table, or watching the sun set over the mountains. These are the memories that linger long after you’ve returned home—and we’re so excited to share them with you.`,
    image: 'chiang-mai-night-market.jpeg',
    bg: 'rgba(250, 250, 250, 0.9)', // ivory
  },
];

export default function AboutChiangMaiPage() {
  return (
    <div>
      {sections.map((section, index) => (
        <Paper
          key={section.title}
          shadow="xs"
          radius="0"
          style={{ backgroundColor: section.bg }}
          py="5rem"
        >
          <Container size="lg">
            <Grid align="center" gutter="xl" justify="center" style={{ marginBottom: '2rem' }}>
              {/* Alternate image + text order */}
              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}>
                <Image
                  src={section.image}
                  alt={section.title}
                  radius="md"
                  style={{
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}>
                <Title order={2} mb="sm">
                  {section.title}
                </Title>
                <Text size="lg" c="dimmed" lh={1.7} style={{ whiteSpace: 'pre-line' }}>
                  {section.text}
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
      ))}
    </div>
  );
}
