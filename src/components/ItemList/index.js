import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../Components/ItemDetail"
import getFetch from "../../Data/Data"


const ItemDetailContainer=()=>{
    const [products,setProducts]=useState([])   
    const [loading,setLoading]=useState(true)
    const[count,setCount]=useState(0)

    const {categoryId}=useParams()


    useEffect(()=>{
        getFetch
        .then(res=>setProducts(res.filter((c)=>c.category===categoryId)))
        .catch(err=>console.log("error :" + err))
        .finally(()=>setLoading(false))
    },[categoryId])

return(

<div>
    {
        loading ? <span>Cargando cervezas🍻...</span>:
        <ItemDetail productos={products} />
    }
</div>
)
}


export default ItemDetailContainer