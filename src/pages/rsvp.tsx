import RsvpForm from '../components/rsvp-form';
import classes from './rsvp.module.css';

export default function RsvpPage() {
  return (
    <div className={classes.page}>
      <h1>RSVP Page</h1>
      <p>Please RSVP by March 31 2026</p>
      <RsvpForm />
    </div>
  );
}
