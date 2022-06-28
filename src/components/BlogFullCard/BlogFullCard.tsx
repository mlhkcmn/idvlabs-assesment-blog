import { FC, useState, useEffect } from 'react';
import { getPostsByPostId, TPost } from '../../services/postServices';
import { getComments, addComment, TComment } from '../../services/commentServices';
import { Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Divider, Grid, TextField } from '@mui/material'
import blogcard from "../../images/blogcard.jpeg"
import moment from 'moment'
import { StyledText, HeaderText, PageSection, SubmitButton } from './styled';

const BlogFullCard: FC = () => {
    const [posts, setPosts] = useState<TPost>();
    const getPosts = async () => {
        setPosts(await getPostsByPostId())
    }
    const [comments, setComments] = useState<TComment[]>([]);
    const getComment = async () => {
        setComments(await getComments())
    }
    const [zcomments, setZcomments] = useState<TComment>({
        id: 0,
        zComment: '',
        userName: (localStorage.getItem('userName') || ''),
        postId: parseInt(localStorage.getItem('postId') || '0'),
        userId: parseInt(localStorage.getItem('userId') || '0')
    })

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setZcomments({ ...zcomments, [name]: value })
    }

    const addComments = async () => {
        setComments(await addComment(zcomments))
    }

    useEffect(() => {
        getPosts();
        getComment();
    }, []);

    return (
        <>
            <PageSection>
                <Container maxWidth="lg">
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                        <Grid item xs={8}>
                            <Card>
                                <CardActions sx={{ bgcolor: '-moz-initial' }}>
                                    <Box>
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" color="textSecondary" component="h3">
                                                Author : "{posts?.userName}""
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                                Created : "{moment(posts?.createDate).format('DD.MM.YYYY , h:mm:s')}"
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardActions>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={blogcard}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {posts ? posts.header : ''}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {posts ? posts.description : ''}
                                    </Typography>
                                </CardContent>
                                <Divider />
                                <CardContent>
                                    <HeaderText>Comments</HeaderText>
                                </CardContent>
                                <Divider />
                                {comments.map(comment => {
                                    return (
                                        <>
                                            <Grid container>
                                                <Grid item>
                                                    <StyledText>
                                                        {comment.userName} :
                                                    </StyledText>
                                                </Grid>
                                                <Grid item>
                                                    <Typography>
                                                        {comment.zComment}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                        </>
                                    )
                                })}
                                <Grid item spacing={'3'}>
                                    <TextField fullWidth placeholder='Add Comment' multiline rows={2} size='small' sx={{ width: '80%' }} name="zComment" onChange={(e) => onChangeInput(e)} />
                                    <SubmitButton onClick={() => addComments()}>Submit</SubmitButton>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </PageSection>
        </>
    )
}

export default BlogFullCard