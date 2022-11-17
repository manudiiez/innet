// import "./userList.css";
import '../css/page/personList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from '../hooks/useFetch'


function UserList() {
  const { data, loading, reFetch } = useFetch(`/ver_usuarios`);
  const [data2, setData2] = useState([])

  const handleDelete = (id) => {
    setData2(data2.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "nombre_usuario",
      headerName: "Nombre de usuario",
      width: 200
    },
    { field: "rol", headerName: "Rol", width: 80 },
    { field: "id_persona_fk", headerName: "Id persona", width: 90 },
    { field: "id_area_fk", headerName: "Id Area", width: 90 },
    { field: "contraseña", headerName: "Contraseña", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userBrand">
        <p>Nuevo usuario</p>
        <Link to='/newUser'>Crear</Link>
      </div>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        )
      }
    </div>
  );
}

export default UserList;