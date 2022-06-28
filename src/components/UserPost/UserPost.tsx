import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, IconButton, Grid, Modal } from "@mui/material"
import { Settings, Delete } from '@material-ui/icons'
import blogcard from "../../images/blogcard.jpeg"
import CreatePost from "../NewPostModal/NewPostModal"
import { FC, useEffect, useState } from "react"
import {
    ModalBox,
    ModalAddButton,
    ModalText,
    ModalInput
} from "./styled"
import axios from "axios"

type TPost = {
    id: number;
    header: string;
    description: string;
    createDate?: string;
    userId: number;
    userName?: string;
}

const UserPost: FC = () => {
    const [posts, setPosts] = useState<TPost[]>([]);

    const postData = async () => {
        try {
            const res = await axios.get(`https://localhost:7050/api/Posts/byUserId/${localStorage.getItem('userId')}`);
            setPosts(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id: number) => {
        try {
            const { data, status } = await axios.delete<TPost>(
                `https://localhost:7050/api/Posts/${id}`,
                {
                    headers: {
                        Accept: 'application/json'
                    },
                },
            );
            console.log('response is: ', data);
            console.log('response status is: ', status);
            postData();
            return data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    useEffect(() => {
        postData();
    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox>
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <ModalText>Header</ModalText>
                            <ModalInput size="medium" placeholder='Header' fullWidth name='header' id='header' />
                        </Grid>
                        <Grid item xs={12}>
                            <ModalText>Description</ModalText>
                            <ModalInput multiline rows={5} size="medium" placeholder='Description' fullWidth name='description' id='description' />
                        </Grid>
                        <Grid item xs={12}>
                            <ModalAddButton>
                                Update
                            </ModalAddButton>
                        </Grid>
                    </Grid>
                </ModalBox>
            </Modal>
            <Grid item>
                <CreatePost />
            </Grid>
            {posts.map(post => {
                return (
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={blogcard}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {post.header}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <IconButton onClick={() => handleOpen()}>
                                    <Settings />
                                </IconButton>
                                <IconButton onClick={() => deletePost(post.id)}>
                                    <Delete />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}

export default UserPost

