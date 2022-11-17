// import "./userList.css";
import '../css/page/personList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from '../hooks/useFetch' 


function PersonList() {
  const [data2, setData2] = useState(userRows);
  const { data, loading, reFetch } = useFetch(`/ver_personas`);
  console.log(data)

  const handleDelete = (id) => {
    setData2(data2.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "nombre_persona",
      headerName: "Nombre",
      width: 200
    },
    {
      field: "apellido_persona",
      headerName: "Apellido",
      width: 200
    },
    {
      field: "dni_persona",
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
        <p>Nueva persona</p>
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

export default PersonList;