import Navbar from '../components/navbar/Navbar';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Navbar />
    </div>
  );
}

export default Index;
