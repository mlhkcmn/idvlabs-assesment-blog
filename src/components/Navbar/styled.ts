import { Link, Typography , Button} from '@mui/material';
import styled from 'styled-components';

const NavbarTitle = styled(Typography)`
    margin-right: 10px !important;
    font-family: monospace !important;
    font-weight: 700 !important;
    letter-spacing: .3rem !important;
    color: inherit;
`;

const NavbarAccordionButton = styled(Link)`
    text-decoration: none !important;
`;

const NavbarButton = styled(Button)`
    background-color:  !important;
    text-transform: capitalize !important;
    color: white !important;
    font-size: 21px !important;
`;

export { NavbarTitle , NavbarAccordionButton , NavbarButton }