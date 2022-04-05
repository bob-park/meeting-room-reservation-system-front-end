import type { NextPage } from 'next';
import Head from 'next/head';

import LoginForm from 'components/user/LoginForm';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
