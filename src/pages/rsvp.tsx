import RsvpForm from '../components/rsvp-form';
import classes from './rsvp.module.css';

export default function RsvpPage() {
  return (
    <div className={classes.page}>
      <h1>RSVP Page</h1>
      <p>Please RSVP by June 30 2026</p>
      <RsvpForm />
    </div>
  );
}
