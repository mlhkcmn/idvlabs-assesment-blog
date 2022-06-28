import { Typography , Container, Button} from "@mui/material";
import styled from "styled-components";


const StyledText = styled(Typography)`
    font-size: 15px !important;
    margin: 0px 15px 0px 30px !important;
`

const HeaderText = styled(Typography)`
    font-size: 20px !important;
    text-align: center;
`

const PageSection = styled(Container)`
    max-width: none !important;
    height: 100vh;
    background: #2980b9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const SubmitButton = styled(Button)`
    color: white !important;
    background-color: #2980b9 !important;
    height: 62px !important;
    width: 100px !important;
`;

export { StyledText , HeaderText , PageSection , SubmitButton}