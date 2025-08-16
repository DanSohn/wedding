import classes from './header.module.css';

export default function Header() {
  return (
    <div className={classes.container}>
      <h1 className={classes.headerName}>Carina & Daniel</h1>
      <div className={classes.dateLocation}>Sunday, November 22, 2026 • Chiang Mai, Thailand</div>
    </div>
  );
}
