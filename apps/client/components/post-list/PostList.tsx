import Post from '../post/Post';
import styles from './PostList.module.scss';

export default function PostList() {
  return (
    <div className={styles.postList}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Post key={i} />
      ))}
    </div>
  );
}
