
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';





function App() {
  return (
  
    <div className="App">
    
         <NavBar/>
        
        
   
    {<ItemListContainer greetings="Bienvenidos a HP FARMA" />}
  

      
    </div>
  );
}

export default App;
