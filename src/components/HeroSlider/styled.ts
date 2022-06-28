import { Box } from '@mui/material';
import styled from 'styled-components';
import heroslider from "../../images/heroslider.jpeg"

const HeroSliderBox = styled(Box)`
    background: url(${heroslider});
    height: 250px;
    background-position: center;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 4rem;
    @media (max-width: 768px) {
        height: 150px;
        font-size: 3em;
    }
`;


export { HeroSliderBox }