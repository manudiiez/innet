import '../css/page/areaList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function AlertList() {
    const [data, setData] = useState(productRows);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "name",
            headerName: "Alerta",
            width: 200
        },
        {
            field: "status",
            headerName: "Estado",
            width: 100,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button className="productListEdit" onClick={handleOpen}>Editar</button>
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
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Editar el estado de la Alerta
                    </Typography>
                    <div>
                        <div>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Sin atender</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Resuelta</label>
                        </div>
                    </div>
                </Box>
            </Modal>
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

export default AlertList;