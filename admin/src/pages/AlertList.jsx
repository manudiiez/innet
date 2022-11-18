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
import useFetch from '../hooks/useFetch';
import axios from 'axios'

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
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const { data, loading, reFetch } = useFetch(`/alert`);

    const handleOpen = (id) => {
        setOpen(true);
        setId(id)
        console.log(id);
    }
    const handleClose = () => setOpen(false);

    const getDate = (data) => {
        const date = new Date(data)
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}`
    };

    const changueState = async (state) => {
        try {
            const newObj = {
                state: state,
                enddate: new Date()
            }
            await axios.put(`http://localhost:8800/api/alert/${id}`, newObj);
            reFetch()
            handleClose()
        } catch (error) {
            console.log(error)

        }
    }




    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "fullname",
            headerName: "Emitida por",
            width: 200
        },
        {
            field: "origin",
            headerName: "Origen",
            width: 100,
        },
        {
            field: "startdate",
            headerName: "Fecha de emisión",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        {getDate(params.row.startdate)}
                    </>
                );
            },
        },
        {
            field: "state",
            headerName: "Estado",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.state == 'sin atender' ? (
                                <Button variant="outlined" onClick={() => { handleOpen(params.row.id) }} style={{ color: "red", borderColor: "red" }}>{params.row.state}</Button>
                            ) : (
                                <Button variant="outlined">{params.row.state}</Button>
                            )
                        }
                    </>
                );
            },
        }
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
                        Cambiar estado
                    </Typography>
                    <div>
                        <Button variant="outlined" onClick={() => changueState('sin atender')} style={{ color: "red", borderColor: "red", marginRight: "5px" }}>Sin atender</Button>
                        <Button variant="outlined" onClick={() => changueState('resuelta')} >Resuelta</Button>
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