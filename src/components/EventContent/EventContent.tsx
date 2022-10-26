import React, { FC } from 'react';
import { IEventsListProps } from '../../types/event';

const EventContent: FC<IEventsListProps> = ({ event }) => {
  if (!event) {
    return <p>Событий нет</p>;
  }

  return (
    <div className="event-content">
      <p>
        <span className="event-content__title">Описание: </span>
        {event.description}
      </p>
      <p>
        <span className="event-content__title">Гость: </span>
        {event.guest}
      </p>
      <p>
        <span className="event-content__title">Автор: </span>
        {event.author}
      </p>
    </div>
  );
};

export default EventContent;
