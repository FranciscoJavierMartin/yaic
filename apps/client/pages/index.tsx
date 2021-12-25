import PostList from '../components/post-list/PostList';
import ProfileInfo from '../components/profile-info/ProfileInfo';
import Stats from '../components/stats/Stats';
import Stories from '../components/stories/Stories';
import { getMainLayout } from '../utils/layouts';
import styles from './index.module.scss';

export default function Index() {
  return (
    <>
      <ProfileInfo />
      <Stories />
      <Stats />
      <PostList />
    </>
  );
}

Index.getLayout = getMainLayout;
