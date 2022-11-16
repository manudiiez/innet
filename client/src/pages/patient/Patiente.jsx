import React from 'react'
import styled from 'styled-components'

import Swal from 'sweetalert2'

const handleClick = () => {
    Swal.fire({
        title: 'Pedir ayuda?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Si!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Tipo de ayuda',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Normal',
                cancelButtonText: 'Emergencia',
                cancelButtonColor: '#d33',

                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Ubicacion actual',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Baño',
                        cancelButtonText: 'Habitacion',
                        cancelButtonColor: '#sss',

                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'Alerta normal en el baño emitida',
                                icon: 'success',
                            })
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            Swal.fire({
                                title: 'Alerta normal en la habitacion emitida',
                                icon: 'success',
                            })
                        }
                    })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire({
                        title: 'Ubicacion actual',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Baño',
                        cancelButtonText: 'Habitacion',
                        cancelButtonColor: '#sss',

                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'Alerta urgente en el baño emitida',
                                icon: 'success',
                            })
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            Swal.fire({
                                title: 'Alerta urgente en la habitacion emitida',
                                icon: 'success',
                            })
                        }
                    })
                }
            })
        }
    })
}

const Patiente = () => {
    return (
        <Container>
            <button onClick={handleClick}>Ayuda</button>
        </Container>
    )
}

export default Patiente

const Container = styled.div`
    height: 100vh;
    padding: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    button{
        width: 100%;
        height: 50%;
        background: #6150FF;
        border: none;
        border-radius: 10px;
        color: #fff;
    }

`