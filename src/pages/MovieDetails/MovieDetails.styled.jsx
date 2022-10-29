import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const BackLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    border: 1px solid black;
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;

  :hover{
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    border: none;
    };
`;