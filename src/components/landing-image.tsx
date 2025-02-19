import classes from './landing-image.module.css';
export default function LandingImage(props) {
  return (
    <div className={classes.landingImage}>
      <img src={props.src} />
    </div>
  );
}
