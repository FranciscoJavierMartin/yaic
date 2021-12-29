import Link from 'next/link';
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
      <form>
        <h1>Yaic!</h1>
        <input type='email' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <button>Sign In</button>
        <Link href='/signup'>
          <a>Don&apos;t have an account? Create one.</a>
        </Link>
      </form>
    </div>
  );
}
