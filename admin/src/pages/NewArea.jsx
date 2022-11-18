// import "./newProduct.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/page/newArea.css'


function NewArea() {

  const [area, setArea] = useState({});
  const navigate = useNavigate()
  const handleChange = (e) => {
    setArea((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault()
    if (area.name.length !== 0) {
      try {
        await axios.post(`http://localhost:8800/api/area`, area);
        navigate('/areas')
      } catch (err) {
        console.log(err)
      }
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Area nueva</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Nombre</label>
          <input type="text" name='name' placeholder="Area 1B" onChange={handleChange} />
        </div>
        <button type='submit' onClick={handleClick} className="addProductButton">Crear</button>
      </form>
    </div>
  );
}

export default NewArea; 