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
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Slide, toast, ToastContainer } from 'react-toastify';
import classes from './rsvp-form.module.css';
type Inputs = {
  isAttending: Attendance;
  fullName: string;
  email: string;
  isBringingGuest: IsBringingGuest;
  guestFullName: string;
  guestEmail: string;
  events?: string[];
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
  LanternFestival = 'LANTERN_FESTIVAL',
}

const defaultValues = {
  events: [WeddingEvents.Ceremony_And_Reception],
};

export default function RsvpForm() {
  const { control, handleSubmit, watch } = useForm<Inputs>({
    defaultValues,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showConditionalGuestFields = watch('isBringingGuest') === IsBringingGuest.Yes;
  const showFullForm = watch('isAttending') === Attendance.Yes;

  const validateFormData = (data: Inputs) => {
    let hasError = false;
    if (!data.fullName) {
      toast.error('Full name is required');
      hasError = true;
    }

    if (!data.email) {
      toast.error('Email is required');
      hasError = true;
    }

    if (data.isBringingGuest === undefined) {
      toast.error('Please indicate if you are bringing a guest');
      hasError = true;
    }

    return !hasError;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isSubmitting) return;

    const isValid = validateFormData(data);

    if (!isValid) return;

    const payload = {
      fullName: data.fullName,
      email: data.email,
      isAttending: data.isAttending,
      isBringingGuest: data.isBringingGuest ?? 'NO',
      guestFullName: data.guestFullName || '',
      guestEmail: data.guestEmail || '',
      dietaryRestrictions: data.dietaryRestrictions || '',
      comments: data.comments || '',
      isAttendingWelcomeParty: Boolean(
        data.events?.includes(WeddingEvents.WelcomeParty),
      ).toString(),
      isAttendingExcursionOne: Boolean(
        data.events?.includes(WeddingEvents.Excursion_One),
      ).toString(),
      isAttendingLanternFestival: Boolean(
        data.events?.includes(WeddingEvents.LanternFestival),
      ).toString(),
    };

    const queryParams = new URLSearchParams(payload).toString();
    console.log('RSVP payload', payload);
    try {
      setIsSubmitting(true);
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbyS6IhLv-tifG_0YLgyEC9y88Mk-UT43h5OM_1pZ23IG09mFiVkTEIPrdHRL3fP1RGNvQ/exec?${queryParams}`,
        {
          method: 'POST',
          // body: JSON.stringify(payload),
        },
      );
      const resData = await res.json();
      console.log('RSVP res', resData);
      toast.success('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      toast.error('There was an error submitting the form. Text Daniel that he sucks at his job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack align="stretch" justify="flex-start" gap="md">
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Full Name"
                placeholder="Daniel Sohn"
                size="md"
                required
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                className={classes.fullWidth}
                label="Email"
                placeholder="daniel.sohn@gmail.com"
                size="md"
                required
              />
            )}
          />

          <Controller
            name="isAttending"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Radio.Group
                value={value}
                onChange={onChange}
                label="Will you be attending?"
                size="md"
                required
              >
                <Group justify="flex-start" grow>
                  <Radio
                    className={classes.radioButton}
                    value={Attendance.Yes}
                    label="Joyfully Accepts"
                    size="md"
                  />
                  <Radio
                    className={classes.radioButton}
                    value={Attendance.No}
                    label="Regretfully Declines"
                    size="md"
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
                  <Radio.Group
                    value={value}
                    onChange={onChange}
                    label="Will you be bringing a +1?"
                    size="md"
                  >
                    <Group justify="flex-start" grow>
                      <Radio
                        className={classes.radioButton}
                        value={IsBringingGuest.Yes}
                        label="Yes"
                        size="md"
                      />
                      <Radio
                        className={classes.radioButton}
                        value={IsBringingGuest.No}
                        label="No"
                        size="md"
                      />
                    </Group>
                  </Radio.Group>
                )}
              />

              {showConditionalGuestFields && (
                <>
                  <Controller
                    name="guestFullName"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Guest's Full Name"
                        placeholder="Phil"
                        size="md"
                      />
                    )}
                  />
                  <Controller
                    name="guestEmail"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Guest email"
                        placeholder="bob.the.builder98@gmail.com"
                        size="md"
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
                    size="md"
                  >
                    <Stack justify="space-around" gap="md">
                      <Checkbox
                        value={WeddingEvents.WelcomeParty}
                        label="Welcome Party"
                        size="md"
                      />
                      <Checkbox
                        value={WeddingEvents.Ceremony_And_Reception}
                        label="Ceremony and Reception"
                        disabled
                        size="md"
                      />
                      {/* <Checkbox value={WeddingEvents.Excursion_One} label="Excursion 1" size="md" />
                      <Checkbox
                        value={WeddingEvents.LanternFestival}
                        label="Lantern Festival"
                        size="md"
                      /> */}
                    </Stack>
                  </Checkbox.Group>
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
                    size="md"
                  />
                )}
              />
            </>
          )}

          <Controller
            name="comments"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                label="Questions or Comments"
                placeholder="Let us know if there's anything on your mind"
                size="md"
              />
            )}
          />

          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </Stack>
      </form>
      <ToastContainer
        position="bottom-center"
        theme="colored"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Slide}
      />
    </Container>
  );
}
