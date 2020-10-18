import styled from "styled-components";
import avatarImage from '../../assets/avatar.png'

export const PageTitle = styled.h2`
    font-family: 'Gloria Hallelujah', cursive;
`

export const Avatar = styled.div`
    background-image: url(${avatarImage});
    background-size: cover;
    height: 50px;
    align-self: center;
    width: 50px;
    border-radius: 50%;
    transition: 0.5s ease;
    object-fit: cover;
    &:hover {
        width: 60px;
        height: 60px;
        filter: grayscale(1);
    }
`

export const HeaderWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`