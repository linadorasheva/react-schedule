import { Badge, Calendar, Popover } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { IEventCalendarProps } from '../../types/event';
import { formatDate } from '../../utils/date';
import EventContent from '../EventContent/EventContent';

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDateEvents = events.filter(
      (event) => event.date === formatedDate
    );

    return (
      <ul className="events">
        {currentDateEvents.map((event, index) => (
          <Popover
            key={index}
            content={<EventContent event={event} />}
            title={`Событие: ${event.title}`}
            trigger={['click', 'hover']}
          >
            <li style={{ margin: '0 0 8px 0' }}>
              <Badge
                status={event.status}
                text={event.title}
                title={event.description}
              />
            </li>
          </Popover>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
