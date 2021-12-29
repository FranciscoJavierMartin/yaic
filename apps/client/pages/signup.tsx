import Link from 'next/link';
import { useFormik } from 'formik';

import styles from './signup.module.scss';

interface SignUpValues {
  email: string;
  username: string;
  password: string;
  confirm: string;
}

export default function SignUp() {
  const formik = useFormik<SignUpValues>({
    initialValues: { email: '', username: '', password: '', confirm: '' },
    onSubmit: (values: SignUpValues) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.signUpPage}>
      <form>
        <h1>Yaic!</h1>
        <input type='text' placeholder='Username' name='username' />
        <input type='email' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <input type='password' placeholder='Confirm password' name='confirm' />
        <button>Sign Up</button>
        <Link href='/signin'>
          <a>Have you an account? Sign In.</a>
        </Link>
      </form>
    </div>
  );
}
