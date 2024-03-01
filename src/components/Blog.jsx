import styles from "./css/blog.module.css";

import BlogItem from "./BlogItem";
import Deal from "./Deal";

import pageData from "../assets/json/pageData.json";
import lastUpdated from "../assets/svg/lastUpdated.svg";
import disclosure from "../assets/svg/disclosure.svg";
import downArrow from "../assets/svg/downArrow.svg";

function Blog() {
  const data = pageData;

  const handleRelevantOption = (value) => {
    const relevantOptions = document.querySelector("[data-relevant-options]");
    const relevantOption = document.querySelector("[data-relevant-option]");

    relevantOption.innerHTML = value;

    if (relevantOptions.style.display === "flex") {
      relevantOptions.style.display = "none";
    }
  };

  const handleRelevantOptions = () => {
    const relevantOptions = document.querySelector("[data-relevant-options]");

    if (relevantOptions.style.display === "flex") {
      relevantOptions.style.display = "none";
    } else if (relevantOptions.style.display === "none") {
      relevantOptions.style.display = "flex";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <h1 className={styles.blogTitle}>{data.title}</h1>

        <div className={styles.basicInfoDiv}>
          <div className={styles.basicInfoLeft}>
            <div className={styles.basicInfo}>
              <img
                src={lastUpdated}
                alt="Info"
                className={styles.basicInfoIcon}
              />
              <p className={styles.basicInfoText}>
                Last Updated - {data.last_updated}
              </p>
            </div>

            {data.disclosure && (
              <div className={styles.basicInfo}>
                <img
                  src={disclosure}
                  alt="Info"
                  className={styles.basicInfoIcon}
                />
                <p className={styles.basicInfoText}>{data.disclosure}</p>
              </div>
            )}
          </div>

          <div className={styles.basicInfoRight}>
            <p
              className={styles.relevant}
              onClick={(e) => {
                e.preventDefault();
                handleRelevantOptions();
              }}
              data-relevant-option
            >
              Top Relevant
            </p>
            <img
              src={downArrow}
              alt="Arrow"
              className={styles.relevantIcon}
              onClick={(e) => {
                e.preventDefault();
                handleRelevantOptions();
              }}
            />

            <div
              style={{ display: "none" }}
              className={styles.relevantOptions}
              data-relevant-options
            >
              <p
                className={styles.relevantOptionName}
                onClick={(e) => {
                  e.preventDefault();
                  handleRelevantOption("Top Trending");
                }}
              >
                Top Trending
              </p>
              <p
                className={styles.relevantOptionName}
                onClick={(e) => {
                  e.preventDefault();
                  handleRelevantOption("Top Relevant");
                }}
              >
                Top Relevant
              </p>
              <p
                className={styles.relevantOptionName}
                onClick={(e) => {
                  e.preventDefault();
                  handleRelevantOption("Latest");
                }}
              >
                Latest
              </p>
            </div>
          </div>
        </div>

        <div className={styles.blogTags}>
          {data.tags.map((tag, i) => (
            <div className={styles.blogTag} key={i}>
              {tag}
            </div>
          ))}
        </div>

        <div className={styles.blogRoute}>
          {data.blog_route.map((route, index) => (
            <>
              {index !== 0 && <div className={styles.routerArrow}>{">"}</div>}
              <div className={styles.blogRouteName}>{route}</div>
            </>
          ))}
        </div>
      </div>

      <div className={styles.blogItems}>
        {data.items.map((item, i) => (
          <BlogItem blogItemData={item} blogItemNumber={i} key={i} />
        ))}
      </div>

      <div className={styles.relatedDealsDiv}>
        <h3 className={styles.relatedDealsHeading}>
          Related deals you might like for
        </h3>

        <div className={styles.relatedDeals}>
          {data.related_deals.map((deal, i) => (
            <Deal dealData={deal} key={i} />
          ))}
        </div>
      </div>

      <div className={styles.signUpDiv}>
        <p className={styles.signUpText}>
          Sign up and get exclusive special deals
        </p>

        <div className={styles.signUpInputDiv}>
          <input type="text" className={styles.signUpInput} />

          <button className={styles.signUpBtn}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
