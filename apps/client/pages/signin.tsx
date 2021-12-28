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
      <h1>Yaic!</h1>
      <form onSubmit={formik.handleSubmit} className={styles.signInForm}>
        <input
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder='Email'
        />
        <input
          name='password'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Password'
        />
        <button type='submit' className='button-link'>Sign In</button>
      </form>
    </div>
  );
}
