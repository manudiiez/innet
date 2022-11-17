import React from 'react'
import styled from 'styled-components'
import ItemNavbarContainer from '../../components/navbar/ItemNavbarContainer';
const ViewFile = () => {

    const handleClick = () => {
    }

    return (
        <Container>
            <ItemNavbarContainer />
            <button onClick={handleClick}>Crear</button>
        </Container>
    )
}

export default ViewFile

const Container = styled.div`
    


`