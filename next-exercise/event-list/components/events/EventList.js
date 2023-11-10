import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <EventItem />
        ))}
      </ul>
    </>
  );
};

export default EventList;
