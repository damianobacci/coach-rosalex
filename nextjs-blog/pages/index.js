import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "A meetup",
    image: "https://",
    address: "Some address",
    description: "|This is a meetup",
  },
  {
    id: "m2",
    title: "A meetup",
    image: "https://",
    address: "Some address",
    description: "|This is a meetup",
  },
  {
    id: "m3",
    title: "A meetup",
    image: "https://",
    address: "Some address",
    description: "|This is a meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_DATA} />;
}

export default HomePage;
