import { Button, DatePicker, Form, Input, Select } from 'antd';
import { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import {
  EventStatusEnum,
  EventStatusNamesEnum,
  IEvent,
  IEventFormProps,
} from '../../types/event';
import { formatDate } from '../../utils/date';
import { formRules } from '../../utils/formRules';

const EventForm: FC<IEventFormProps> = ({ guests, submit }) => {
  const [event, setEvent] = useState<IEvent>({
    title: '',
    description: '',
    author: '',
    date: '',
    guest: '',
  } as IEvent);

  const { user } = useTypedSelector((state) => state.authReducer);
  const [form] = Form.useForm();

  const selectDate = (date: Moment | null): void => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const buildSelectOptionsMap = (): Record<EventStatusEnum, string> => {
    return {
      [EventStatusEnum.default]: EventStatusNamesEnum.default,
      [EventStatusEnum.warning]: EventStatusNamesEnum.warning,
      [EventStatusEnum.error]: EventStatusNamesEnum.error,
      [EventStatusEnum.success]: EventStatusNamesEnum.success,
    };
  };

  const selectOptionsMap = buildSelectOptionsMap();

  const submitForm = () => {
    submit({ ...event, author: user.username });
    setEvent({
      title: '',
      description: '',
      author: '',
      date: '',
      guest: '',
      status: EventStatusEnum.default,
    });
    form.resetFields();
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submitForm}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Название события"
        name="title"
        rules={[formRules.required()]}
      >
        <Input
          value={event.title}
          onChange={(evt) => setEvent({ ...event, title: evt.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="Описание события"
        name="description"
        rules={[formRules.required()]}
      >
        <Input
          value={event.description}
          onChange={(evt) =>
            setEvent({ ...event, description: evt.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Статус события"
        name="status"
        rules={[formRules.required()]}
      >
        <Select onChange={(status) => setEvent({ ...event, status })}>
          {Object.values(EventStatusEnum).map((item, index) => {
            return (
              <Select.Option key={index} value={item}>
                {selectOptionsMap[item]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата события"
        name="date"
        rules={[formRules.required()]}
      >
        <DatePicker
          disabledDate={formRules.disabledDates()}
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>

      <Form.Item label="Гость" name="guest">
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          <Select.Option key="default-option" value="Нет">
            нет
          </Select.Option>
          {guests.map((guest) => {
            return (
              <Select.Option key={guest.id} value={guest.username}>
                {guest.username}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
