import RsvpForm from '../components/rsvp-form';
import classes from './rsvp.module.css';

export default function RsvpPage() {
  return (
    <div className={classes.page}>
      <p>Please RSVP by April 30 2026</p>
      <RsvpForm />
    </div>
  );
}
