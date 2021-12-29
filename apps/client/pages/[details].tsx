import PostDetails from '../components/post-details/PostDetails';
import { getMainLayout } from '../utils/layouts';
import styles from './details.module.scss';

export default function Details() {
  return (
    <main className={styles.pageDetails}>
      <PostDetails />
    </main>
  );
}

Details.getLayout = getMainLayout;
