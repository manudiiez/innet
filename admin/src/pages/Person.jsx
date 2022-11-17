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

function Person() {
  const { id } = useParams()
  const { data, loading, reFetch } = useFetch(`/person/${id}`);

  const [person, setPerson] = useState(data)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPerson((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (person.name.length !== 0 || person.lastname.length !== 0 || person.dni.length !== 0) {
      try {
        await axios.put(`http://localhost:8800/api/person/${data.id}`, person);
        navigate('/persons')
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
                    <label>Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={person.name}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Apellido</label>
                    <input
                      type="text"
                      name="lastname"
                      value={person.lastname}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Dni</label>
                    <input
                      type="text"
                      name="dni "
                      value={person.dni}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
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

export default Person;