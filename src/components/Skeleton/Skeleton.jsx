import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "banner" }) => {
  const elements = Array.from({ length: count }, (_, index) => (
    <li
      key={index}
      className={type === "banner" ? styles.banner : styles.item}
    ></li>
  ));

  return count > 1 ? <ul className={styles.list}>{elements}</ul> : elements[0];
};

export default Skeleton;
