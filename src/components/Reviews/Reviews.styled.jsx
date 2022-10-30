import styled from "styled-components";

export const Item = styled.ul`
    margin-bottom: ${p => p.theme.space[3]}px;

    &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
}
`
export const Title = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
`
export const Discription = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
`