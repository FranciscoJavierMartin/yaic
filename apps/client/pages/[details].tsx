import PostDetails from '../components/post-details/PostDetails';
import { getMainLayout } from '../utils/layouts';

export default function Details() {
  return (
    <div>
      <PostDetails />
    </div>
  );
}

Details.getLayout = getMainLayout;
