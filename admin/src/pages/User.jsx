import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import '../css/page/person.css'
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import ItemGroupRadioArea from "../components/ItemGroupRadioArea";

function User() {
  const { id } = useParams()
  const { data, loading, reFetch } = useFetch(`/user/${id}`);

  const [person, setPerson] = useState(data)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPerson((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(person);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (person.username.length !== 0 || person.email.length !== 0) {
      try {
        await axios.put(`http://localhost:8800/api/user/${data._id}`, person);
        navigate('/users')
      } catch (err) {
        console.log(err)
      }
    }
  };

  useEffect(() => {
    setPerson(data)
  }, [data])

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar persona</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear</button>
        </Link>
      </div>
      <div className="userContainer">
        {
          loading ? (
            <p>loading...</p>
          ) : (
            <div className="userUpdate">
              <span className="userUpdateTitle">Editar</span>
              <form className="userUpdateForm" onSubmit={handleSubmit}>
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Nombre de usuario</label>
                    <input
                      type="text"
                      name="username"
                      value={person.username}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={person.email}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Area</label>
                    <div>
                      <input type="radio" name="rol" value="administrador" checked={person.rol === 'administrador'}  onChange={handleChange} />
                      <label style={{ marginLeft: "5px" }}>Administrador</label>
                    </div>
                    <div>
                      <input type="radio" name="rol" value="paciente" checked={person.rol === 'paciente'}  onChange={handleChange} />
                      <label style={{ marginLeft: "5px" }}>Paciente</label>
                    </div>
                    <div>
                      <input type="radio" name="rol" value="medico" checked={person.rol === 'medico'}  onChange={handleChange} />
                      <label style={{ marginLeft: "5px" }}>Medico</label>
                    </div>
                  </div>
                  <ItemGroupRadioArea person={person} handleChange={handleChange}/>
                  <Button variant="outlined" type="submit" style={{ marginTop: "14px", color: "#6150FF", borderColor: "#6150FF" }}>Editar</Button>
                </div>

              </form>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default User;