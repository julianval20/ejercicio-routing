import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import '../detail.css'

export default function Detail() {
  const { mascotaId } = useParams();  
  const [mascota, setMascota] = useState(null);  

  const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id === parseInt(mascotaId)); 
        setMascota(found);
      })
  }, [mascotaId]);  


  if (!mascota) {
    return <p>La mascota no fue encontrada.</p>;  
  }

  return (
    <div class="mascotas">
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} alt={mascota.nombre} />
      <p>{mascota.raza}</p>
    </div>
  );
}
