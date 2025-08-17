import { Accordion, Text, Title } from '@mantine/core';
import classes from './faq.module.css';

const faqItems = [
  {
    title: 'Travel & Flights',
    emoji: '✈️',
    questions: [
      {
        question: 'When should I book my flights?',
        answer:
          'We recommend booking flights at least 6–8 months in advance to get the best fares and options.',
      },
      {
        question: 'Which airport should I fly into?',
        answer:
          'The closest major airport is Chiang Mai International Airport (CNX). From there, you can take a taxi to the city, or rent a scooter.',
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
    emoji: '🏨',
    questions: [
      {
        question: 'Where should I stay?',
        answer:
          'We have a room block reserved at [Hotel Name]. We recommend booking early to guarantee availability.',
      },
      {
        question: 'Are there other nearby hotels or Airbnb options?',
        answer:
          'Yes, there are plenty of accommodations nearby at different budgets, ranging from boutique resorts to private villas.',
      },
    ],
  },
  {
    title: 'Wedding Events',
    emoji: '💒',
    questions: [
      {
        question: 'What events should I plan to attend?',
        answer:
          'The wedding ceremony and reception will be on November 22 2026. We’ll also host a welcome dinner the evening before and a farewell brunch the following day.',
      },
      {
        question: 'What is the dress code?',
        answer:
          'The ceremony and reception will be semi-formal (light suits, dresses, or tropical cocktail attire). Lightweight fabrics are encouraged due to the warm climate.',
      },
    ],
  },
  {
    title: 'Destination Tips',
    emoji: '🌴',
    questions: [
      {
        question: 'What will the weather be like in November?',
        answer:
          'November in Thailand is typically warm and dry, with average temperatures around 25–30°C (77–86°F).',
      },
      {
        question: 'Do I need a visa to travel to Thailand?',
        answer:
          'Many countries, including Canada and the US, can enter Thailand without a visa for short stays. Please confirm requirements for your passport country.',
      },
      {
        question: 'Are there activities to do nearby?',
        answer:
          'Yes! Thailand is known for its beaches, temples, night markets, and boat tours. We’ll share recommendations closer to the wedding date.',
      },
    ],
  },
  {
    title: 'Other Details',
    emoji: '❓',
    questions: [
      {
        question: 'Are kids welcome?',
        answer:
          'Unfortunately, we are unable to accommodate children at the wedding. We hope you understand and can join us for an adults-only celebration.',
      },
      {
        question: 'What’s the best way to contact you with questions?',
        answer:
          'You can reach us by email at [your email] or through the contact form on this website.',
      },
      {
        question: 'Can I bring a plus one?',
        answer: 'Please check your invitation — if your guest’s name is included, then yes!',
      },
      {
        question: 'What gifts should we bring?',
        answer:
          'Your presence is the best gift! Since we are traveling, we kindly ask no boxed gifts. Contributions to our honeymoon fund are welcome.',
      },
    ],
  },
];

const titles = faqItems.map((section) => section.title);

export default function FaqPage() {
  const items = faqItems.map((section) => (
    <Accordion.Item key={section.title} value={section.title}>
      <Accordion.Control icon={section.emoji}>{section.title}</Accordion.Control>
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
