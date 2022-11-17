import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'nombre_persona', headerName: 'Nombre', width: 130 },
    { field: 'apellido_persona', headerName: 'Apellido', width: 130 },
    { field: 'dni_persona', headerName: 'N°DNI', width: 100 },
    {
        field: "action",
        headerName: "Archivo",
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <Link to={"/fileview/" + params.row.id} className='userListDelete'>
                        Ver
                        <VisibilityIcon />
                    </Link>
                    <Link to={"/file/" + params.row.id} className='userListDelete'>
                        Crear
                        <FileOpenIcon />
                    </Link>
                </>
            );
        },
    },
];

const ItemPersonList = ({ loading, data, reFetch }) => {
    return (
        <Container>
            <div className='container-lg'>
                <div className='header'>
                    <input type="text" />
                    <SearchIcon />
                </div>
                <div className="table">
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
                                className='datagrid'
                            />
                        )
                    }
                </div>
            </div>

        </Container>
    )
}

export default ItemPersonList

const Container = styled.div`
    .container-lg{
        width: 100%;
        max-width: 1000px;
        margin: auto;
        height: 100%;
        .header{
            width: 100%;
            margin-top: 70px;
            margin-bottom: 14px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            overflow: hidden;
            position: relative;
            input{
                border-radius: 10px;
                box-sizing: border-box;
                width: 100%;
                padding: 14px;
                border: none;
            }

            svg{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 14px;
                color: #6150FF;
            }
        }
        .table{
            height: 100%;
            height: 450px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        .userListDelete{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6150FF;
            border-radius: 10px;
            padding: 5px 7px;
            color: #fff;
            gap: 7px;
            margin-left: 5px;
            text-decoration: none;
            &:nth-of-type(1){
                background-color: #9795A0;
            }
        }
    }

`