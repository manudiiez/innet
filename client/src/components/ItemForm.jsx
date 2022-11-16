import React from 'react'
import styled from 'styled-components'

const ItemForm = () => {
  return (
    <Container>
      <h1>Crear un ficha</h1>
      <div>
        <label>Nombre del paciente</label>
        <input type="text" />
      </div>
    </Container>
  )
}

export default ItemForm

const Container = styled.div`
padding: 14px;
margin: 28px 14px;
background: #F3F1FD;
box-sizing: border-box;
width: 100%;
max-width: 768px;
h1{
  text-align: center;
  color: #18142B;
  margin-bottom: 28px;
}

div{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  label{
    color: #9795A0;
    margin-bottom: 14px;
  }
  input{
    background: transparent;
    border: .5px solid #9795A0;
    border-radius: 5px;
    padding: 5px 10px;
    width: calc(100% - 28px);
  }
}


`