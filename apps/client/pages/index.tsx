import Navbar from '../components/navbar/Navbar';
import ProfileInfo from '../components/profile-info/ProfileInfo';
import Stats from '../components/stats/Stats';
import Stories from '../components/stories/Stories';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Navbar />
      <ProfileInfo />
      <Stories />
      <Stats />
    </div>
  );
}

export default Index;
