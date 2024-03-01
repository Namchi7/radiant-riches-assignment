import PropTypes from "prop-types";

import styles from "./css/blogItem.module.css";

import bestChoice from "../assets/svg/bestChoice.svg";
import bestValue from "../assets/svg/bestValue.svg";
import showMore from "../assets/svg/showMore.svg";
import ratingInfo from "../assets/svg/ratingInfo.svg";
import starFull from "../assets/svg/starFull.svg";
import starHalf from "../assets/svg/starHalf.svg";
import starEmpty from "../assets/svg/starEmpty.svg";
import whyTick from "../assets/svg/whyTick.svg";

import blogItemImage from "../assets/images/blogItemImage.png";

function BlogItem(props) {
  const itemNumber = props.blogItemNumber + 1;
  const data = props.blogItemData;

  const rating = data.rating;
  const ratingSmall = Math.round(rating) / 2;
  const empty = 5 - Math.floor(ratingSmall);
  const full = 5 - empty;
  const half = ratingSmall - Math.floor(ratingSmall) === 0.5 ? 1 : 0;

  return (
    <div className={styles.blogItem}>
      {data.label.is_label && (
        <div className={styles.blogItemLabel}>
          <img
            src={data.label.type === 1 ? bestChoice : bestValue}
            alt="Label Icon"
            className={styles.blogItemLabelIcon}
          />

          <p className={styles.blogItemLabelName}>{data.label.label_name}</p>
        </div>
      )}

      <div className={styles.blogItemNumber}>{itemNumber}</div>

      <div className={styles.blogItemLeft}>
        <img
          src={blogItemImage}
          alt="Item Image"
          className={styles.blogItemImage}
        />
        <p className={styles.blogItemImageName}>{data.image_name}</p>
      </div>

      <div className={styles.blogItemRight}>
        <div className={styles.blogItemInfo}>
          <p className={styles.blogItemIntro}>
            <span className={styles.blogItemTitle}>{data.title}</span>{" "}
            {data.short_intro}
          </p>

          {data.discount && (
            <div className={styles.discount}>{`${data.discount} Off`}</div>
          )}

          <div className={styles.mainHighlightsDiv}>
            <div className={styles.highlightsHeading}>Main Highlights</div>

            <div className={styles.mainHighlightsContent}>
              <div className={styles.mainHighlights}>
                {data.main_highlights.type === 1 ? (
                  data.main_highlights.highlights
                ) : (
                  <div className={styles.type2Highlights}>
                    {data.main_highlights.highlights.map((item, i) => (
                      <div className={styles.type2Points} key={i}>
                        <div className={styles.type2Rating}>{item.rating}</div>
                        <div className={styles.type2Highlight}>
                          {item.highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {data.main_highlights.why && (
                <div className={styles.mainHighlightsWhy}>
                  <div className={styles.whyHeading}>Whe we love it</div>

                  <div className={styles.whyPoints}>
                    {data.main_highlights.why.map((why, i) => (
                      <div className={styles.whyPoint} key={i}>
                        <img
                          src={whyTick}
                          alt="Tick"
                          className={styles.whyTick}
                        />
                        <div className={styles.whyPointText}>{why}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.showMore}>
              <span>Show more</span>
              <img
                src={showMore}
                alt="Show More"
                className={styles.showMoreIcon}
              />
            </div>
          </div>
        </div>

        <div className={styles.blogItemRating}>
          <div className={styles.ratingDiv}>
            <div className={styles.rating}>
              {data.rating}
              <img
                src={ratingInfo}
                alt="Rating Info"
                className={styles.ratingInfoIcon}
              />
            </div>

            <div className={styles.ratingEvaluation}>{data.evaluation}</div>

            <div className={styles.ratingStars}>
              {Array.from({ length: full }, (i) => (
                <img
                  src={starFull}
                  alt="Full Star"
                  className={styles.ratingStar}
                  key={i}
                />
              ))}
              {Array.from({ length: half }, (i) => (
                <img
                  src={starHalf}
                  alt="Half Star"
                  className={styles.ratingStar}
                  key={i}
                />
              ))}
              {Array.from({ length: 5 - (full + half) }, (i) => (
                <img
                  src={starEmpty}
                  alt="Empty Star"
                  className={styles.ratingStar}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className={styles.viewMore}>View More</div>
        </div>
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  blogItemData: PropTypes.object,
  blogItemNumber: PropTypes.number,
};

export default BlogItem;
