import { Modal } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import EventForm from '../../components/EventForm/EventForm';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { eventActionCreators } from '../../store/ActionCreators';
import { IEvent } from '../../types/event';

const EventsPage: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useTypedDispatch();
  const { guests } = useTypedSelector((state) => state.eventReducer);

  useEffect(() => {
    dispatch(eventActionCreators.fetchGuests());
  }, []);

  const addNewEvent = (event: IEvent) => {
    dispatch(eventActionCreators.createEvent(event));
    setIsModalVisible(false);
  };

  return (
    <div className="events-page page">
      <h1 className="page__title">Events page</h1>
      <div className="events-page__content">
        <EventCalendar events={{} as IEvent} />
        <button
          onClick={() => setIsModalVisible(true)}
          type="button"
          className="events-page__add-event"
        >
          <span className="events-page__btn-text">New</span>
        </button>
        <Modal
          title="Добавить событие"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <EventForm guests={guests} submit={(event) => addNewEvent(event)} />
        </Modal>
      </div>
    </div>
  );
};

export default EventsPage;
