import { FC, useState } from 'react';
import axios from 'axios';
import {
    NewPost,
    ModalBox,
    ModalAddButton,
    ModalText,
    ModalInput
} from "./styled"
import {
    Stack,
    Modal,
    Grid
} from "@mui/material"

const NewPostModal: FC = () => {
    const [header, setHeader] = useState<String>();
    const [description, setDescription] = useState<String>();

    const postsSubmit = async () => {
        try {
            await axios.post('https://localhost:7050/api/Posts', {header: header , description: description , userName: localStorage.getItem('userName') , userId: localStorage.getItem('userId')})

            window.location.href = "/";
        } catch (err: any) {
            console.log(err);
        }
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                spacing={3}
            >
                <NewPost onClick={handleOpen}>
                    Add New Post
                </NewPost>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox>
                    <form onSubmit={postsSubmit}>
                        <Grid container spacing={1} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <ModalText>Header</ModalText>
                                <ModalInput size="medium" placeholder='Header' fullWidth name='header' id='header' onChange={(e) => setHeader(e.target.value)} value={header} />
                            </Grid>
                            <Grid item xs={12}>
                                <ModalText>Description</ModalText>
                                <ModalInput multiline rows={5} size="medium" placeholder='Description' fullWidth name='description' id='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                            </Grid>
                            <Grid item xs={12}>
                                <ModalAddButton type='submit'>
                                    Add Post
                                </ModalAddButton>
                            </Grid>
                        </Grid>
                    </form>
                </ModalBox>
            </Modal>
        </>
    )
}

export default NewPostModal