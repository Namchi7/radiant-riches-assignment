import PropTypes from "prop-types";

import styles from "./css/deal.module.css";

import dealImage from "../assets/images/blogItemImage.png";

function Deal(props) {
  const data = props.dealData;

  return (
    <div className={styles.deal}>
      <img src={dealImage} alt="Deal Image" />

      <div className={styles.dealDetails}>
        <div className={styles.discountTags}>
          {data.discount_tags.map((tag, i) => (
            <div className={styles.discountTag} key={i}>
              {tag}
            </div>
          ))}
        </div>

        <div className={styles.dealName}>{data.name}</div>

        <div className={styles.dealTitle}>{data.title}</div>

        <div className={styles.priceDiv}>
          <span
            className={styles.effectivePrice}
          >{`${data.currency}${data.effective_price}`}</span>
          <span
            className={styles.originalPrice}
          >{`${data.currency}${data.original_price}`}</span>
          <span
            className={styles.priceDiscount}
          >{`(${data.price_discount} Off)`}</span>
        </div>

        <div className={styles.viewDeal}>View Deal</div>
      </div>
    </div>
  );
}

Deal.propTypes = {
  dealData: PropTypes.object,
};

export default Deal;
