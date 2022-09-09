const Data=[{
    id:1,
    name:"Aziatop",
    img:"https://i.ibb.co/RbPF1zF/aziatop.jpg",
    price: "$150.00",
    category:"Medicamentos",
    stock:25
},
{
    id:2,
    name:"Dulcolax",
    img:"https://i.ibb.co/25CrQ7X/dulcolaz.jpg",
    price: "$250.00",
    category:"Medicamentos",
    stock:9
},
{
    id:3,
    name:"Coltix",
    img:"https://i.ibb.co/b2GqH38/coltix.jpg",
    price: "$350.00",
    category:"Medicamentos",
    stock:3
},
{
    id:4,
    name:"Alernix Spray",
    img:"https://i.ibb.co/0XSY8sm/alernix.jpg",
    price: "$450.00",
    category:"Medicamentos",
    stock:16
},
{
    id:5,
    name:"Curflex",
    img:"https://i.ibb.co/wRyFpWQ/curflex.jpg",
    price: "$550.00",
    category:"Medicamentos",
    stock:12
},

{   id:6,
    name:"Actron",
    img:"https://i.ibb.co/sFv99F0/actron.jpg",
    price: "$650.00",
    category:"Medicamentos",
    stock:19
},
]

const getFetch= new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(() => {
            res(Data)
            
        }, 2000);
    }
    else{
        rej(console.log("No hay datos"))
    }
})

export default getFetch;