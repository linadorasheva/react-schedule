import moment, { Moment } from 'moment';

export const formRules = {
  required: (message = 'Обязательное поле') => ({
    required: true,
    message,
  }),
  disabledDates: () => (current: Moment) => {
    // Can not select days before today and today
    return current && current < moment().startOf('day');
  },
};
