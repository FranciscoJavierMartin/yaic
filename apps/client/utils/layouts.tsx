import type { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';

export function getMainLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
}
