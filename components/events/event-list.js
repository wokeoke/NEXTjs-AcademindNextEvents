import EventItem from './event-item';

function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
export default EventList;
