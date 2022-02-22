import React from 'react';
import { fetchUser } from '../../fetchData';
import Layout from '../layout/Layout';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reduxStore';

const SignInPage = () => {

  const dispatch = useDispatch();

  const handleUserLogIn = () => fetchUser('fake@user.com', '123')
  //Put the data on redux
    .then((data) => dispatch({
      type: signIn,
      user: {
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastname
      }
    })
  )


  return (
    <Layout>
      <h1>Sign In page</h1>
      <button onClick={handleUserLogIn}>Log in user</button>
    </Layout>
  )
};

export default SignInPage;
