import styled from "styled-components";

export const Gallery = styled.ul`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    justify-content: center;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[4]}px;
`