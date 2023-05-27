import styles from './Data.module.css';
import { useEffect, useState } from "react";
import { DataRow } from "../../Components/DataRow/DataRow";

export const Data = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://localhost:7085/Demo');
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createRow = (item: any, index: any) => {
    return (
      <DataRow
        key={index}
        symbol={item.symbol}
        price={item.lastPrice}
      />
    );
  };

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <h1 className={styles.title}>Data</h1>
          {data.map(createRow)}
        </div>
      </div>
      <div className={styles.info}>
        <h4>Lorem Ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quos, sint dolores incidunt obcaecati, mollitia velit ipsam provident, animi veniam totam deleniti itaque ducimus magni corporis quis! Corporis, amet ullam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestiae a maiores eum ipsam repudiandae recusandae cupiditate optio molestias voluptas deserunt adipisci, quos dolor error ducimus atque, provident similique doloremque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, omnis voluptatibus nihil voluptates perferendis repudiandae labore porro veniam soluta delectus, eos ipsam. Rerum odio ad distinctio temporibus commodi debitis quasi!
        </p>
      </div>
    </div>
  );  
};
