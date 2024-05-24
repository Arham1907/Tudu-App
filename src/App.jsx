import './App.css';
import { useState } from 'react';

function App() {
  const [list , setList] = useState([]);
  const [inputText , setInputText] = useState();
  const [editMode , setEditMode] = useState(false);
  const [currentIndex , setCurrentIndex] = useState();

  function updateText(e){
    const inputValue = e.target.value
    setInputText(inputValue)
   }

   function addItem(){
    if(inputText !== ''){
      const copyList = [...list]
      copyList.push(inputText)
      setList(copyList)
  
      setInputText('');
    }
   }

   function deleteItem(index){
    const copyList = [...list];
    copyList.splice(index , 1);
    setList(copyList)
   }

   function editItem(index){
    // PURPOSE
    // 1. add k button update me change hojai
    // 2.index save hojai state me
    // 3.jis line pr click hou oski value input me chale jai

    const value = list[index]
    setInputText(value)

    setEditMode(true)
    setCurrentIndex(index)
   }

   function updateBtn(){
    // PURPOSE
    // 1.update k  onclick p list update hojai
    // 2.update ko add se change krna h

    const copyList = [...list];
    copyList[currentIndex] = inputText;
    setList(copyList)

    setEditMode(false);
    setInputText('');
   }

   function deleteAll(){
    setList([]);
   }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='Enter any text' value={inputText} onChange={updateText} />
        {  editMode  
        ?<button onClick={updateBtn}>Update</button>
        :<button onClick={addItem}>Add</button>
        }<button onClick={deleteAll}>Delete All</button>
        {list.map(function(item , index){
            return <li className={index === currentIndex ? 'orange' : ''}>{item}
            <button onClick={()=> deleteItem(index)}>Delete</button>
            <button onClick={()=> editItem(index)}>Edit</button>
            </li>
          } )}
      </header>
    </div>
  );
}

export default App;
