import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "A dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];

const EventsPage = () => {
  const events = DUMMY_EVENTS.map((event) => (
    <li key={event.id}>
      <strong>{event.title}</strong>. {event.description}{" "}
      <Link to={`/events/${event.id}`}>Link</Link>
    </li>
  ));

  return (
    <>
      <h1>Events Page</h1>
      <ul>{events}</ul>
    </>
  );
};

export default EventsPage;
