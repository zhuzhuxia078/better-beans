import Link from 'next/link';
import styles from '../styles/Shoplist.module.css';
import BeanRating from './BeanRating';


const ShopEntry = ({ shop }) => {
  return (
    <div className={styles.CardShop}>
      <Link href="#">
        <a className="">
          <h3 className="name">{shop.name}</h3>
          <BeanRating rating={shop.rating}/>
          <div className="opening_hours">{shop.opening_hours}</div>
          <div className="location">{shop.location}</div>
        </a>
      </Link>
    </div>
  );
};

export default ShopEntry;