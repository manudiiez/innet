import React from 'react'
import styled from 'styled-components'

const ItemFileForm = () => {
    return (
        <Container>
            <div className="container-lg">
                <div className="header">
                    <p>Crear ficha medica</p>
                    <p className="user"><span>Usuario:</span> manudiiez</p>
                </div>
                <form>
                    <div className='input-container'>
                        <label>Nombre y apellido</label>
                        <input type="text" />
                    </div>
                    <div className='input-container--multi'>
                        <div>
                            <label>Tipo de sangre</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Altura</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Peso</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='input-container'>
                        <label>Enfermedades</label>
                        <input type="text" />
                    </div>
                    <button>Crear</button>
                </form>
            </div>
        </Container>
    )
}

export default ItemFileForm

const Container = styled.div`
    padding: 0 14px;
    .container-lg{
        width: 100%;
        max-width: 1000px;
        margin: auto;
        padding: 70px 0;
        .header{
            margin-bottom: 28px;
            padding: 14px 28px;
            width: 100%;
            border-radius: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 21px;
            }

            .user{
                font-size: 18.2px;
                span{
                    color: #6150FF;
                }
            }
        }

        form{
            margin-bottom: 28px;
            padding: 28px;
            width: 100%;
            border-radius: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            .input-container{
                display: flex;
                flex-direction: column;
                margin-bottom: 24px;
                label{
                    font-size: 14px;
                    margin-bottom: 14px;
                    color: #6150FF;
                }
                input{
                    border: none;
                    border-radius: 10px;
                    padding: 14px;
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                }

            }
            .input-container--multi{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 14px;
                width: 100%;
                margin-bottom: 24px;

                div{
                    display: flex;
                    flex-direction:column;
                    label{
                        font-size: 14px;
                        margin-bottom: 14px;
                        color: #6150FF;
                    }
                    input{
                        border: none;
                        border-radius: 10px;
                        padding: 14px;
                        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                    }
                }

            }
            button{
                width: 100%;
                max-width: 200px;
                padding: 14px;
                border: none;
                border-radius: 10px;
                color: #6150FF;
                background-color: #F3F1FD;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover{
                    background-color: #6150FF;
                    color: #F3F1FD;
                }
            }
            
        }
    }

`