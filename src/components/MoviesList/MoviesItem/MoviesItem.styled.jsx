import styled from "styled-components";

export const ItemMovie = styled.li`
    color: ${p => p.theme.colors.linkColor};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[4]}px;
    margin-top: ${p => p.theme.space[3]}px;
`