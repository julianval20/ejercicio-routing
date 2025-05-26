import Mascota from "./mascota";

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';


const { useEffect, useState } = require("react");

function Mascotas() {

 const [mascotas, setMascotas] = useState([]);

 useEffect(() => {

   const URL =

  "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json";

   fetch(URL)

     .then((data) => data.json())

     .then((data) => {

       setMascotas(data);

     });

 }, []);


 return (

   <div className="container">

     <h2 className="mt-2">Listado de mascotas</h2>

     <hr></hr>

     <Row>

       {mascotas.map((mascota) => (

         <Col key={mascota.id}>

           <Mascota mascota={mascota} />

         </Col>

       ))}

     </Row>

   </div>

 );

}

export default Mascotas;