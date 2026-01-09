import type React from 'react';
import { useNavigate } from 'react-router';
import NavBurger from '../navburger/navburger';
import classes from './logo-header.module.css';

export default function LogoHeader() {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className={classes.root}>
      <div></div>
      <a href="/home" onClick={handleClick} className={classes.link} aria-label="Go to home">
        <img src="/logo.png" alt="Logo" className={classes.img} />
      </a>
      <div className={classes.right}>
        <NavBurger />
      </div>
    </div>
  );
}
