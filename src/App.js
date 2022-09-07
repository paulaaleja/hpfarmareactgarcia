
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCounter from './components/ItemCounter';




function App() {
  const stock= 10
  return (
  
    <div className="App">
    
         <NavBar/>
        
        
   
    <ItemListContainer greetings="Bienvenidos a HP FARMA" />
    <ItemCounter stock={stock}/>
  

      
    </div>
  );
}

export default App;
