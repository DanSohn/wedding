import { Accordion, Text, Title } from '@mantine/core';
import { IconMapPin, IconQuestionMark } from '@tabler/icons-react';
import classes from './faq.module.css';

const ICON_SIZE = 22;
const ICON_STROKE = 1.5;

const faqItems = [
  {
    title: 'Destination Tips',
    icon: <IconMapPin size={ICON_SIZE} stroke={ICON_STROKE} color="var(--mantine-color-dimmed)" />,
    questions: [
      {
        question: 'What will the weather be like in November?',
        answer:
          'November in Thailand is typically warm and dry, with average temperatures around 25–30°C (77–86°F).',
      },
      {
        question: 'Do I need a visa to travel to Thailand?',
        answer:
          'Many countries, including Canada, Hong Kong and the US, can enter Thailand without a visa for short stays. Please confirm requirements for your passport country.',
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
    icon: (
      <IconQuestionMark size={ICON_SIZE} stroke={ICON_STROKE} color="var(--mantine-color-dimmed)" />
    ),
    questions: [
      {
        question: 'Are kids welcome?',
        answer:
          'Unfortunately, we are unable to accommodate children at the wedding. We hope you understand and can join us for an adults-only celebration.',
      },
      {
        question: 'What’s the best way to contact you with questions?',
        answer:
          'You can reach us by email at carinaxdaniel@gmail.com or through the contact form on this website.',
      },
      {
        question: 'Can I bring a plus one?',
        answer: 'Please check your invitation — if your guest’s name is included, then yes!',
      },
      {
        question: 'Are there any vaccinations that I need to get before traveling to Thailand?',
        answer:
          'It is recommended to be up-to-date on routine vaccines, and consider vaccines for Hepatitis A and Typhoid. Please consult your healthcare provider at least 2 months before flying for personalized advice.',
      },
      {
        question: 'Is there a registry?',
        answer:
          'YOUR PRESENCE IS THE GREATEST GIFT OF ALL uwu SO ITS A-OKAY. if you REALLLY want to, you can e-transfer us at sohnjhyun@gmail.com or carinanvm don’t do it don’t give her money.',
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
