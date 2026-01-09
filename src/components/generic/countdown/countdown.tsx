import { Group, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './countdown.module.css';

const TARGET_DATE = Date.UTC(2026, 10, 23, 9, 0, 0);

export default function Countdown() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Real countdown
  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diffMs = TARGET_DATE - now;
      const seconds = Math.max(0, Math.floor(diffMs / 1000));
      setTotalSeconds(seconds);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Derive real unit values
  const realDays = Math.floor(totalSeconds / (24 * 60 * 60));
  const realHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const realMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const realSeconds = totalSeconds % 60;

  // Animate each unit independently on mount
  useEffect(() => {
    if (hasAnimated || totalSeconds === 0) return;

    const animate = (target: number, setter: (v: number) => void, duration = 900) => {
      const fps = 60;
      const steps = Math.max(1, Math.floor((duration / 1000) * fps));
      let step = 0;

      const interval = setInterval(() => {
        step += 1;
        const progress = Math.min(step / steps, 1);
        const value = Math.floor(progress * target);
        setter(value);

        if (progress >= 1) clearInterval(interval);
      }, 1000 / fps);
    };

    animate(realDays, setDays, 1200);
    animate(realHours, setHours, 1200);
    animate(realMinutes, setMinutes, 1200);
    animate(realSeconds, setSeconds, 1200);

    setHasAnimated(true);
  }, [totalSeconds, hasAnimated, realDays, realHours, realMinutes, realSeconds]);

  // After animation → normal sync
  useEffect(() => {
    if (!hasAnimated) return;
    setDays(realDays);
    setHours(realHours);
    setMinutes(realMinutes);
    setSeconds(realSeconds);
  }, [realDays, realHours, realMinutes, realSeconds, hasAnimated]);

  return (
    <Group justify="center" gap="lg" grow className={classes.container}>
      <Stack>
        <div className={classes.number}>{days}</div>
        <div className={classes.label}>days</div>
      </Stack>
      <Stack>
        <div className={classes.number}>{hours}</div>
        <div className={classes.label}>hours</div>
      </Stack>
      <Stack>
        <div className={classes.number}>{minutes}</div>
        <div className={classes.label}>minutes</div>
      </Stack>
      <Stack>
        <div className={classes.number}>{seconds}</div>
        <div className={classes.label}>seconds</div>
      </Stack>
    </Group>
  );
}
