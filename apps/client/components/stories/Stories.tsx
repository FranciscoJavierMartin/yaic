import styles from './Stories.module.scss';

export default function Stories() {
  return (
    <div className={styles.stories}>
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <img
            src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
            alt='Avatar'
            className={styles.story}
          />
        </div>
      ))}
    </div>
  );
}
