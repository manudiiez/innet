// import "./userList.css";
import '../css/page/personList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from '../hooks/useFetch'
import axios from 'axios';


function UserList() {
  const { data, loading, reFetch } = useFetch(`/user`);

  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:8800/api/user/${id}`);
      reFetch()
    } catch (err) {
      console.log(err)
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "username",
      headerName: "Nombre de usuario",
      width: 200
    },
    { field: "rol", headerName: "Rol", width: 80 },
    { field: "idPersona", headerName: "Id persona", width: 90 },
    { field: "idArea", headerName: "Id Area", width: 90 },
    { field: "email", headerName: "Email", width: 200 },
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