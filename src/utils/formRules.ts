export const formRules = {
  required: (message = 'Обязательное поле') => ({
    required: true,
    message,
  }),
};
