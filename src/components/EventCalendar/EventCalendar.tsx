import { Badge, BadgeProps, Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEventCalendarProps } from '../../types/event';
import { formatDate } from '../../utils/date';

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    // const listData = getListData(value);
    const formatedDate = formatDate(value.toDate());
    const currentDateEvents = events.filter(
      (event) => event.date === formatedDate
    );

    return (
      <ul className="events">
        {currentDateEvents.map((event) => (
          <li key={event.id}>
            <Badge status={'default'} text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
