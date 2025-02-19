import LandingImage from '../components/landing-image';
import RsvpForm from '../components/rsvp-form';
import classes from './rsvp.module.css';

export default function RsvpPage() {
  return (
    <div className={classes.page}>
      <LandingImage src="/wedding_stock.jpg" />
      <h1>RSVP Page</h1>
      <RsvpForm />
    </div>
  );
}
