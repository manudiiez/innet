import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/page/newPerson.css'


function NewPerson() {

  const [person, setPerson] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPerson((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async(e) => {
    e.preventDefault()
    console.log(person);
    if (person.name.length !== 0 || person.lastname.length !== 0 || person.dni.length !== 0) {
      try {
        await axios.post(`http://localhost:8800/api/person`, person);
        navigate('/persons')
      } catch (err) {
        console.log(err)
      }
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Persona nueva</h1> 
      <form className="newUserForm" onSubmit={handleClick}>
        <div className="newUserItem">
          <label>Nombre</label>
          <input type="text" name='name' onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Apellido</label>
          <input type="text"  name='lastname' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Dni</label>
          <input type="text" name='dni' onChange={handleChange} />
        </div>
        <button type='submit' className="newUserButton">Crear</button>
      </form>
    </div>
  );
}

export default NewPerson;