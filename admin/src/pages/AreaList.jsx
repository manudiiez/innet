import '../css/page/areaList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from '../hooks/useFetch'


function AreaList() {
    const { data, loading, reFetch } = useFetch(`/area`);

    const columns = [
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "name",
            headerName: "Nombre del area",
            width: 200
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/area/" + params.row.id}>
                            <button className="productListEdit">Editar</button>
                        </Link>
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <div className="userBrand">
                <p>Nueva area</p>
                <Link to='/newArea'>Crear</Link>
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

export default AreaList;