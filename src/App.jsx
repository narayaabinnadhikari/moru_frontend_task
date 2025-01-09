import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 const API_URL = `https://jsonplaceholder.typicode.com`

 const [posts, setPosts] = useState([]);
 const [err, setErr] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
          throw new Error('Not returning data');
        }
        const data = await response.json();
        setPosts(data);
        setErr(null);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
    fetchPosts() }, 1000);
 }, [])
  return (
    <>
      <Header />
        {isLoading && <h3>Waiting for Data ....</h3>}
        {err && <h3 style={{color: "red"}}>{ `Sorry: ${err}` }</h3>}
        {!err && !isLoading &&
      <main className='min-h-screen bg-gray-100'>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))} 
        </ul>
      </main>
        }
      <Footer />
    </>
  )
}

export default App
