import styled from "styled-components";

const Background = styled.div`
  background: rgba(0, 0, 0, 0.76);
    width: 100%;
    height: calc(100vh - 117px);
    position: absolute;
    left: 100%;
    bottom: 0;
    z-index: 20;
`
function Menu(){
    return (
        <>
        <Background></Background>
        </>
    )
}

export default Menu;