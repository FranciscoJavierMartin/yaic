import type { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';

export default function Details() {
  return <div>Test</div>;
}

Details.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
