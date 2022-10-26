import { Badge, Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEventCalendarProps } from '../../types/event';
import { formatDate } from '../../utils/date';

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDateEvents = events.filter(
      (event) => event.date === formatedDate
    );

    return (
      <ul className="events">
        {currentDateEvents.map((event, index) => (
          <li key={index}>
            <Badge status={'default'} text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
