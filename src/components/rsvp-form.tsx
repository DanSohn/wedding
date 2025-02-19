import { Button, Container, Group, Radio, Stack, Textarea, TextInput } from '@mantine/core';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import classes from './rsvp-form.module.css';
type Inputs = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  guest?: {
    name: string;
    email: string;
  };
  isAttending: Attendance;
  comments?: string;
};

enum Attendance {
  Yes = 'YES',
  No = 'NO',
}

export default function RsvpForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // add page on load to check if user has already submitted an RSVP
  useEffect(() => {
    // Check if user has already submitted an RSVP
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Add cookie stating that they've already submitted an RSVP
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          Name (required)
          <Group>
            <Controller
              name="user.firstName"
              control={control}
              render={({ field }) => (
                <TextInput {...field} label="First Name" placeholder="Daniel" />
              )}
            />
            <Controller
              name="user.lastName"
              control={control}
              render={({ field }) => <TextInput {...field} label="Last Name" placeholder="Sohn" />}
            />
          </Group>
          <Group>
            <div style={{ width: '100%' }}>
              <Controller
                name="user.email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    className={classes.fullWidth}
                    label="Email"
                    placeholder="daniel.sohn@gmail.com"
                  />
                )}
              />
            </div>
          </Group>
          <Group>
            <div style={{ width: '100%' }}>
              <Controller
                name="guest.name"
                control={control}
                render={({ field }) => (
                  <TextInput {...field} label="Guest name" placeholder="Bob the builder" />
                )}
              />
            </div>
          </Group>
          <Group>
            <div style={{ width: '100%' }}>
              <Controller
                name="guest.email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Guest email"
                    placeholder="bob.the.builder98@gmail.com"
                  />
                )}
              />
            </div>
          </Group>
          <Group>
            <Controller
              name="isAttending"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Radio.Group value={value} onChange={onChange} label="Will you be attending?">
                  <Radio
                    className={classes.radioButton}
                    value={Attendance.Yes}
                    label="Joyfully Accepts"
                  />
                  <Radio
                    className={classes.radioButton}
                    value={Attendance.No}
                    label="Regretfully Declines"
                  />
                </Radio.Group>
              )}
            />
          </Group>
          <Group>
            <div style={{ width: '100%' }}>
              <Controller
                name="comments"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    label="Questions or Comments"
                    placeholder="Let us know if there's anything on your mind"
                  />
                )}
              />
            </div>
          </Group>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Container>
  );
}
