
import './App.css';
import NavBar from './components/NavBar';
import getFetch from './components/Data/Data';
import {useEffect,useState} from 'react';




function App() {

  const[data,setData]=useState([])
  const [loading,setLoading]=useState(true)

 
 






  useEffect(()=>{
    getFetch
    .then(res=>setData(res))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
},[])


  return (
    <>
    <NavBar/>
  
    <div className="App">
      <header className='App-header'>
      </header>
  <div>

    {
    loading?<h2>Cargando...</h2>:
    data.map(medicamento=><li key={medicamento.id}>{medicamento.id} ) {medicamento.name} {medicamento.price}
    <img src={medicamento.img} width='150' height={'150'} /></li>)
    }
  </div>
</div>
</>  
  );
}

export default App;
