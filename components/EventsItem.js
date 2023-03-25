import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventsItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "../public/images/event-default.png"}
          width={170}
          height={100}
          alt="..."
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name} </h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <button className="btn"> Details</button>
        </Link>
      </div>
    </div>
  );
}
