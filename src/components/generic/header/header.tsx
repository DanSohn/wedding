import classes from './header.module.css';

export default function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.headerName}>Carina & Daniel</div>
      <div className={classes.dateLocation}>Monday, November 23, 2026</div>
      <div className={classes.dateLocation}>Chiang Mai, Thailand</div>
    </div>
  );
}
