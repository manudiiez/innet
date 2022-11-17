// import "./userList.css";
import '../css/page/personList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from '../hooks/useFetch' 
import axios from 'axios'

function PersonList() {
  const { data, loading, reFetch } = useFetch(`/person`);
  console.log(data)

  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:8800/api/person/${id}`);
      reFetch()
    } catch (err) {
      console.log(err)
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "Nombre",
      width: 200
    },
    {
      field: "lastname",
      headerName: "Apellido",
      width: 200
    },
    {
      field: "dni",
      headerName: "N°DNI",
      width: 200
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/person/" + params.row.id}>
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
        <p>Nueva persona</p>
        <Link to='/newPerson'>Crear</Link>
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

export default PersonList;