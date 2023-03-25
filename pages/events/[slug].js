import styles from "@/styles/Event.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Image from "next/image";
export default function Event({ evt }) {
  return (
    // <Layout>
    //   <Link href="./">
    //     <button className="btn-secondary"> {"<Back "} </button>
    //   </Link>
    //   <div className={styles.event}>
    //     <div className={styles.img}>
    //       <Image
    //         src={evt.image ? evt.image : "../public/images/event-default.png"}
    //         width={500}
    //         height={500}
    //         alt="..."
    //       />
    //     </div>
    //     <div className={styles.info}>
    //       <span>
    //         {evt.date} at {evt.time}
    //       </span>
    //       <h3>{evt.name} </h3>
    //     </div>
    //   </div>
    // </Layout>
    <Layout>
      <Link href="./">
        <button className="btn-secondary"> {"<Back "} </button>
      </Link>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1 style={{ textAlign: "center" }}>{evt.name}</h1>

        <div className={styles.image} style={{ textAlign: "center" }}>
          <Image
            src={evt.image ? evt.image : "../public/images/event-default.png"}
            width={600}
            height={600}
            alt="..."
          />
        </div>

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
  };
}
