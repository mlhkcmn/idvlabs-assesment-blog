import { Typography , Container, Button } from "@mui/material";
import styled from "styled-components";

const LoginHeader = styled(Typography)`
    font-weight: 400 !important;
    font-size: 30px !important;
    color: #1876d2 !important;
    letter-spacing: .3rem !important;
    text-align: center;
`;

const LoginButtonTitle = styled(Typography)`
    text-transform: capitalize;
    color: white !important;
`;

const LoginButton = styled(Button)`
    background-color: #1876d2 !important;
`;


const LoginSection = styled(Container)`
    max-width: none !important;
    height: 100vh;
    background: #2980b9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export { LoginHeader , LoginButtonTitle , LoginSection , LoginButton }