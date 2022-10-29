import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    margin-left: ${p => p.theme.space[4]}px;
`

export const Title = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`

export const Overwview = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[2]}px;
`
export const Discription = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
`
export const VoteAver = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    display: inline;
`

export const Vote = styled.span`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
`