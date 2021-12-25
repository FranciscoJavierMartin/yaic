import type { ReactElement } from 'react';
import Navbar from '../navbar/Navbar';

interface MainLayoutProps {
  children: ReactElement;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
