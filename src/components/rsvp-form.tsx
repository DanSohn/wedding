import {
  Button,
  Checkbox,
  Container,
  Group,
  Radio,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import classes from './rsvp-form.module.css';
type Inputs = {
  isAttending: Attendance;
  user: {
    fullName: string;
    email: string;
  };
  isBringingGuest: IsBringingGuest;
  guest?: {
    fullName: string;
    email: string;
  };
  events: string[];
  dietaryRestrictions?: string;
  comments?: string;
};

enum Attendance {
  Yes = 'YES',
  No = 'NO',
}

enum IsBringingGuest {
  Yes = 'YES',
  No = 'NO',
}

enum WeddingEvents {
  WelcomeParty = 'WELCOME_PARTY',
  Ceremony_And_Reception = 'CEREMONY_AND_RECEPTION',
  Excursion_One = 'EXCURSION_ONE',
  Excursion_Two = 'EXCURSION_TWO',
}

const defaultValues = {
  events: [WeddingEvents.Ceremony_And_Reception],
};

export default function RsvpForm() {
  const { control, handleSubmit, watch } = useForm<Inputs>({
    defaultValues,
  });

  const showConditionalGuestFields = watch('isBringingGuest') === IsBringingGuest.Yes;
  const showFullForm = watch('isAttending') === Attendance.Yes;

  // add page on load to check if user has already submitted an RSVP
  useEffect(() => {
    // Check if user has already submitted an RSVP
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Add cookie stating that they've already submitted an RSVP
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack align="stretch" justify="flex-start" gap="md">
          <Controller
            name="user.fullName"
            control={control}
            render={({ field }) => (
              <TextInput {...field} label="Full Name" placeholder="Daniel Sohn" />
            )}
          />
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

          <Controller
            name="isAttending"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Radio.Group value={value} onChange={onChange} label="Will you be attending?">
                <Group justify="flex-start" grow>
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
                </Group>
              </Radio.Group>
            )}
          />

          {showFullForm && (
            <>
              <Controller
                name="isBringingGuest"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Radio.Group value={value} onChange={onChange} label="Will you be bringing a +1?">
                    <Group justify="flex-start" grow>
                      <Radio
                        className={classes.radioButton}
                        value={IsBringingGuest.Yes}
                        label="Yes"
                      />
                      <Radio
                        className={classes.radioButton}
                        value={IsBringingGuest.No}
                        label="No"
                      />
                    </Group>
                  </Radio.Group>
                )}
              />

              {showConditionalGuestFields && (
                <>
                  <Controller
                    name="guest.fullName"
                    control={control}
                    render={({ field }) => (
                      <TextInput {...field} label="Guest's Full Name" placeholder="Phil" />
                    )}
                  />
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
                </>
              )}

              <Controller
                name="events"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox.Group
                    value={value}
                    onChange={onChange}
                    label="Which events will you be attending?"
                  >
                    <Stack justify="space-around" gap="md">
                      <Checkbox value={WeddingEvents.WelcomeParty} label="Welcome Party" />
                      <Checkbox
                        value={WeddingEvents.Ceremony_And_Reception}
                        label="Ceremony and Reception"
                        disabled
                      />
                      <Checkbox value={WeddingEvents.Excursion_One} label="Excursion 1" />
                      <Checkbox value={WeddingEvents.Excursion_Two} label="Excursion 2" />
                    </Stack>
                  </Checkbox.Group>
                )}
              />
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

              <Controller
                name="dietaryRestrictions"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Do you have any dietary restrictions?"
                    placeholder="Vegan, vegetarian, allergies, etc."
                  />
                )}
              />
            </>
          )}

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Container>
  );
}
