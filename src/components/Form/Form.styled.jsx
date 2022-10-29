import styled from "styled-components";

export const SearchInput = styled.input`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 10px;
    width: 20%;
    height: 15px;
    border: 1px solid lightGray;
    border-radius: 4px;
    margin-top: ${p => p.theme.space[3]}px;
` 

export const SearchFormBtn = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid lightGray;
    cursor: pointer;

    :hover{
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    };
`;
