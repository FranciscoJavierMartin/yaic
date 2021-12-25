import type { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PostList from '../components/post-list/PostList';
import ProfileInfo from '../components/profile-info/ProfileInfo';
import Stats from '../components/stats/Stats';
import Stories from '../components/stories/Stories';
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

Index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
