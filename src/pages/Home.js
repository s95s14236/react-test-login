import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={`center ${styles.homeContent}`}>
            <h1>XXX Company</h1>
            <h3>About us</h3>
            <p>We provide freight transportation, logistics, and information services to over 50,000 customers through a network of offices in North America, Europe, Asia, South America, Australia, and the Middle East.</p>
            <h4>Contact</h4>
            <p>Tel：+886-2-XXXX-XXXX</p>
            <p>Addr：XXX, XXX, XXX, Taipei City, Taiwan</p>
        </div>
    );
}