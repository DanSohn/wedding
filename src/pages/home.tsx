import { Text } from '@mantine/core';
import classes from './home.module.css';

function HomePage() {
  return (
    <div className={classes.page}>
      <Text className={classes.gratefulText}>
        We are so grateful and excited to celebrate our special day with you. Please explore our
        wedding website for logistics, lodging, FAQs, registry information and more. Feel free to
        reach out if you have any questions!
      </Text>
    </div>
  );
}

export default HomePage;
