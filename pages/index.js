import { getFeaturedEvents } from '../dummy-data';
import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
