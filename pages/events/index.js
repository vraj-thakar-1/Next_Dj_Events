import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
import EventsItem from "@/components/EventsItem";
export default function EventsPage({ events }) {
  // console.log(events.events.length);
  return (
    <Layout>
      <Link href="./">
        <button className="btn-secondary"> {"<Back "} </button>
      </Link>
      <h1 className="container">Events</h1>
      {events.events.length === 0 && <h3>No Events to show</h3>}
      {events.events.length !== 0 &&
        events.events.map((evt) => (
          <EventsItem key={evt.id} evt={evt}></EventsItem>
        ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
