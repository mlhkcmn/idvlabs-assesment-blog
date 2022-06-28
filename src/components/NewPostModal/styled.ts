import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

const NewPost = styled(Button)`
    background-color: #1876d2 !important;
    text-transform: capitalize !important;
    color: white !important;
    font-size: 20px !important;
    @media (max-width: 900px) {
        font-size: 18px !important;
    }
    @media (max-width: 500px) {
        font-size: 15px !important;
    }
    @media (max-width: 420px) {
        font-size: 12px !important;
        margin-top: 13px !important;
    }
`;

const ModalBox = styled(Box)`
    position: absolute;
    width: 500px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid #1876d2;
    border-radius: 7px;
    text-align: center;
`;

const ModalText = styled(Typography)`
    margin: 5px !important;
`;

const ModalAddButton = styled(Button)`
    background-color: #1876d2 !important;
    color: white !important;
    margin-bottom: 5px !important;
`;

const ModalInput = styled(TextField)`
    width: 80% !important;
`;

export {  NewPost , ModalBox , ModalAddButton , ModalText , ModalInput }