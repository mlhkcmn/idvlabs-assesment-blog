import { Card, Box, TextField, CardActionArea, CardMedia, CardContent, Typography, CardActions, IconButton, Grid, Modal } from "@mui/material"
import { Settings, Delete } from '@material-ui/icons'
import blogcard from "../../images/blogcard.jpeg"
import SearchIcon from '@mui/icons-material/Search'
import CreatePost from "../NewPostModal/NewPostModal"
import { FC, useEffect, useState } from "react"
import {
    ModalBox,
    ModalAddButton,
    ModalText,
    ModalInput
} from "./styled"
import axios from "axios"

interface IPost {
    id: number;
    header: string;
    description: string;
    createDate?: string;
}

const UserPost: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const recipeData = async () => {
        try {
            const res = await axios.get(`https://localhost:7050/api/Posts/byUserId/${localStorage.getItem('userId')}`);
            setPosts(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        recipeData();
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
                    <form>
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
                                <ModalAddButton type='submit'>
                                    Add Post
                                </ModalAddButton>
                            </Grid>
                        </Grid>
                    </form>
                </ModalBox>
            </Modal>
            <Grid item sx={{ width: '66%' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField label="Search Blog" variant="standard" sx={{ width: '495px' }} />
                </Box>
            </Grid>
            <Grid item sx={{ width: '34%' }}>
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
                                <IconButton onClick={handleOpen}>
                                    <Settings />
                                </IconButton>
                                <IconButton>
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
