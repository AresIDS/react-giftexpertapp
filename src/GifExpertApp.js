import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     //   setCategorias([...categorias, 'DC']);
    //     setCategorias(cats => ['DC',...categorias])
    // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias}/>
      <hr />
    
      <ol>
         {
             categorias.map(categoria => <GiftGrid key={categoria} categoria={categoria} />)
      
         }
      </ol>
    </>
  );
};
