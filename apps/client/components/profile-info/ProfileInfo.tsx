import styles from './ProfileInfo.module.scss';

export default function ProfileInfo() {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.avatarContainer}>
        <img
          src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
          alt='Avatar'
          className={styles.avatar}
        />
      </div>
      <div className={styles.actions}>
        <h2 className={styles.username}>janedoe</h2>
        <button className={`button-link ${styles.action}`}>Follow</button>
      </div>
    </div>
  );
}
