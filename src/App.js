import { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
  const [items,setItems] = useState([])
  const [count , setCount] = useState(0);
   useEffect(()=>{
    if(localStorage.hasOwnProperty('Items')){
      const cur= JSON.parse(localStorage.getItem('Items'));
      setItems(cur)
      setCount(parseInt(localStorage.getItem('cnt')));
     }
   },[]);
   const Tog = (id)=>{
    let cnt = 0;
    const newList = items.map((item) =>{
               if(item.id == id){
                  cnt += (item.checked);
               }
               else{
                cnt += !item.checked;
               }
               return item.id === id ? {...item,checked : !item.checked} : item;
    })
    setItems(newList);
    setCount(cnt);
    localStorage.setItem('Items',JSON.stringify(newList));
    localStorage.setItem('cnt',cnt);
  }
  return (
    <div className="App">
      <Header/>{/* Heaer For the title*/}
      <Content items = {items} setItems = {setItems} Tog = {Tog} setCount={setCount}/>{/* To display content*/}
      <Footer count = {count} setCount = {setCount} items = {items} setItems = {setItems}/>{/* TO add or reset the tasks*/}
    </div>
  );
}

export default App;
