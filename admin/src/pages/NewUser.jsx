import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/page/newPerson.css'
import Collapse from '@mui/material/Collapse';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { StarBorder } from '@material-ui/icons';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import ListSubheader from '@mui/material/ListSubheader';
import DraftsIcon from '@mui/icons-material/Drafts';
import useFetch from '../hooks/useFetch';
import ItemListDropdown from '../components/ItemListDropdown';


function NewUser() {


    const [person, setPerson] = useState({})

    const navigate = useNavigate()


    const handleChange = (e) => {
        setPerson((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleChangePerson = (id) => {
        setPerson((prev) => ({ ...prev, ['idPersona']: id }));
        console.log(person);
    };
    const handleChangeArea = (id) => {
        setPerson((prev) => ({ ...prev, ['idArea']: id }));
        console.log(person);
    };
    const handleClick = async (e) => {
        e.preventDefault()
        console.log(person);
        if (person.username.length !== 0 || person.email.length !== 0 || person.password.length !== 0) {
            try {
                await axios.post(`http://localhost:8800/api/user/register`, person);
                navigate('/users')
            } catch (err) {
                console.log(err)
            }
        }
    };

    return (
        <div className="newUser">
            <h1 className="newUserTitle">Usuario nuevo</h1>
            <form className="newUserForm" onSubmit={handleClick}>
                <div>
                    <div className="newUserItem">
                        <label>Nombre de usuario</label>
                        <input type="text" name='username' onChange={handleChange} />
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" name='email' onChange={handleChange} />
                    </div>
                    <div className="newUserItem">
                        <label>Contraseña</label>
                        <input type="password" name='password' onChange={handleChange} />
                    </div>
                    <div className="userUpdateItem">
                        <label>Area</label>
                        <div>
                            <input type="radio" name="rol" value="administrador" checked={person.rol === 'administrador'} onChange={handleChange} />
                            <label style={{ marginLeft: "5px" }}>Administrador</label>
                        </div>
                        <div>
                            <input type="radio" name="rol" value="paciente" checked={person.rol === 'paciente'} onChange={handleChange} />
                            <label style={{ marginLeft: "5px" }}>Paciente</label>
                        </div>
                        <div>
                            <input type="radio" name="rol" value="medico" checked={person.rol === 'medico'} onChange={handleChange} />
                            <label style={{ marginLeft: "5px" }}>Medico</label>
                        </div>
                    </div>
                    <ItemListDropdown setPerson={setPerson} handleChange={handleChangePerson} uri='/person' title='Persona relacionada' />
                    <ItemListDropdown setPerson={setPerson} handleChange={handleChangeArea} uri='/area' title='Area' />
                </div>
                <button type='submit' className="newUserButton">Crear</button>
            </form>
        </div>
    );
}

export default NewUser;