import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEventCalendarProps } from '../../types/event';

const EventCalendar: FC<IEventCalendarProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
