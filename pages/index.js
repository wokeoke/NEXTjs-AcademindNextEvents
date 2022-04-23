import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';

function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
