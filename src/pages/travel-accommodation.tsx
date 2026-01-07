import { Accordion, Text, Title } from '@mantine/core';
import { IconHome2, IconPlane } from '@tabler/icons-react';
import classes from './travel-accommodation.module.css';

const ICON_SIZE = 22;
const ICON_STROKE = 1.5;

const faqItems = [
  {
    title: 'Travel & Flights',
    icon: <IconPlane size={ICON_SIZE} stroke={ICON_STROKE} color="var(--mantine-color-dimmed)" />,
    questions: [
      {
        question: 'When should I book my flights?',
        answer:
          'We recommend booking flights at least 6–8 months in advance to get the best fares and options.',
      },
      {
        question: 'When should I arrive to Chiang Mai?',
        answer:
          'We recommend arriving by November 20th to attend the welcome party and have ample time to settle in before the wedding day. (Jetlag will be rough)',
      },
      {
        question: 'Which airport should I fly into?',
        answer:
          'The closest major airport is Chiang Mai International Airport (CNX). From there, you can take a taxi to the city, or rent a scooter if you’re adventurous!',
      },
      {
        question: 'Will transportation be provided from the airport to the hotel/venue?',
        answer:
          'We will share group transportation options closer to the date, or you can take a taxi or rideshare directly to the hotel.',
      },
    ],
  },
  {
    title: 'Accommodation',
    icon: <IconHome2 size={ICON_SIZE} stroke={ICON_STROKE} color="var(--mantine-color-dimmed)" />,
    questions: [
      {
        question: 'Where should I stay?',
        answer:
          'We recommend guests to stay at Flora Creek with us, and we are currently discussing with them for a group discounted rate. \
          More information on that will be provided once figured out. However, there are still several hotels and resorts in and \
          around Chiang Mai that are amazingly beautiful and convenient.',
      },
      {
        question: 'When should we book?',
        answer: 'We recommend booking early to secure your preferred accommodation.',
      },
    ],
  },
];

const titles = faqItems.map((section) => section.title);

export default function FaqPage() {
  const items = faqItems.map((section) => (
    <Accordion.Item key={section.title} value={section.title}>
      <Accordion.Control
        icon={
          <span className={classes.icon} aria-hidden>
            {section.icon}
          </span>
        }
      >
        {section.title}
      </Accordion.Control>
      <Accordion.Panel>
        {section.questions.map((question) => (
          <div key={question.question} className={classes.question}>
            <Title order={3}>{question.question}</Title>
            <Text>{question.answer}</Text>
          </div>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className={classes.page}>
      <Title order={2}>Travel & Accommodation</Title>
      <Accordion
        multiple
        defaultValue={titles}
        classNames={{
          item: classes.accordionItem,
          control: classes.title,
        }}
      >
        {items}
      </Accordion>
    </div>
  );
}
