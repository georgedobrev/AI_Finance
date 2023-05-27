import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to CashGrab</h1>
        <h3 className={styles.description}>
          Our platform utilizes AI to provide information about current prices of selected Stocks and Companies.
          The information given must not be taken as financial advice.
        </h3>
      </div>
    </div>
  );
}
