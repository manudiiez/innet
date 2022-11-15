import '../css/page/productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function AreaList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "name",
            headerName: "Nombre del area",
            width: 200
        },
        { field: "stock", headerName: "Pacientes", width: 80 },
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
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
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
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default AreaList;