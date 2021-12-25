import Image from 'next/image';
import Link from 'next/link';
import styles from './PostDetails.module.scss';

export default function PostDetails() {
  return (
    <div className={styles.postDetails}>
      <Image
        src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        alt='Dummy text'
        layout='intrinsic'
        height={550}
        width={550}
      />
      <div className={styles.authorInfo}>
        <div className={styles.avatarContainer}>
          <img
            src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
            alt='Avatar'
            className={styles.avatar}
          />
        </div>
        <strong>janedoe</strong>
        <button>Follow</button>
      </div>
      <div className={styles.comments}>
        {[1, 2, 3].map((i) => (
          <div className={styles.comment} key={i}>
            <Link href='/'>
              <a className={styles.avatar}>
                <img
                  src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
                  alt='Avatar'
                />
              </a>
            </Link>
            <div className={styles.content}>
              <Link href='/'>
                <a className={styles.author}>username</a>
              </Link>
              <div className={styles.metadata}>
                <span className={styles.date}>Today at 5:42PM</span>
              </div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                incidunt optio amet odit praesentium, laudantium, velit quae
                assumenda ipsam eligendi natus totam cum asperiores aliquid qui
                doloribus est eum soluta.
              </div>
              <div className={styles.actions}>
                <button>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
