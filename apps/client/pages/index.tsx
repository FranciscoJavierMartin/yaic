import Navbar from '../components/navbar/Navbar';
import ProfileInfo from '../components/profile-info/ProfileInfo';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Navbar />
      <ProfileInfo />
    </div>
  );
}

export default Index;
