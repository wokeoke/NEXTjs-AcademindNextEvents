import EventItem from './event-item';

function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
}
export default EventList;
