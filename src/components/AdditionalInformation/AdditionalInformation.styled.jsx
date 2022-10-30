import styled from "styled-components";

export const TitleAI = styled.h3`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[2]}px;
`

export const DiscriptionItem = styled.li`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;

    &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
  :hover{
        color: ${p => p.theme.colors.accent};
    };
`