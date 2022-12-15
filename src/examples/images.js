import React from 'react'
import styled from 'styled-components'
import serviceImage from "../images/service.jpg"

const images = () => {
  return (
    <>
        <img src = {serviceImage} alt = "service" />
        <h2> gatsby image! </h2>
    </>
    )
}

// const Wrapper = styled.section
export default images