import styles from './Stats.module.scss';

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div>
        <strong>81</strong>
        <span>posts</span>
      </div>
      <div>
        <strong>13k</strong>
        <span>followers</span>
      </div>
      <div>
        <strong>237</strong>
        <span>following</span>
      </div>
    </div>
  );
}
