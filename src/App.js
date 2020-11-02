import React, { useState, useEffect } from 'react';
import Amplify, { API, Auth, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { listPosts } from './graphql/queries'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetchPosts();
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user: ', user);
    console.log('user attributes: ', user.attributes);
  }


  async function fetchPosts() {
    try {
      const postData = await API.graphql({ query: listPosts });
      setPosts(postData.data.listPosts.items)
    } catch (err) {
      console.log({ err })
    }
  }
  return (
    <div>
      <h1>Hello World</h1>
      {
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.location}</p>
          </div>
        ))
      }
      <AmplifySignOut />
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);