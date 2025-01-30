import { useEffect, useState } from 'react'
import Footer from './Footer';
import apiRequest from './apiRequest';
import Form from './Form';
// import List from './List';
import Table from './Table';

function App() {
 const API_URL = `https://jsonplaceholder.typicode.com`

 const [reqType, setReqType] = useState('users');
 const [items, setItems] = useState([]);

 useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error)
      } 
    }
    fetchItems();
 }, [reqType])

// {

//   const postOptions = {
//     method: 'POST',
//     header: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(myNewItem)
//   }
//   const result = await apiRequest(API_URL,postOptions);
//   if(result) setFetchError(result);
// }

  return (
    <>
        <Form reqType={reqType} setReqType={setReqType} />
        {/* <List items={items} /> */}
        <Table items={items} />
      <Footer />
    </>
  )
}

export default App
