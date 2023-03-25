import { API_URL } from "../config/index";

import Layout from "@/components/Layout";
import EventsItem from "@/components/EventsItem";
import Link from "next/link";
export default function HomePage({ events }) {
  // console.log(events.events.length);
  return (
    <Layout>
      <h1 className="container">Upcoming events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.length !== 0 &&
        events.map((evt) => <EventsItem key={evt.id} evt={evt}></EventsItem>)}
      {events.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <Link href="./events">
            <button className="btn-secondary">View All</button>
          </Link>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.events.slice(0, 3) },
    revalidate: 1,
  };
}
