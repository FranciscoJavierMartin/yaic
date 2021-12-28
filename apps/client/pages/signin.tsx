import { useFormik } from 'formik';

import styles from './signin.module.scss';

interface SignInValues {
  password: string;
  email: string;
}

export default function SignIn() {
  const formik = useFormik<SignInValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values: SignInValues) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.signInPage}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='Email or Phone' id='username' />

        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password' id='password' />

        <button>Log In</button>
        <div className={styles.social}>
          <div className='go'>
            <i className='fab fa-google'></i> Google
          </div>
          <div className='fb'>
            <i className='fab fa-facebook'></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
