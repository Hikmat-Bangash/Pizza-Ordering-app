import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image className={styles.image} src={pizza.img} alt="" objectFit="cover" width="300" height="250" />
        </a>
      </Link>
   
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
      <p>⭐⭐⭐⭐⭐<strong>(55)</strong> </p>
    </div>
  );
};

export default PizzaCard;
