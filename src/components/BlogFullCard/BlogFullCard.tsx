import { FC , useState , useEffect } from 'react';
import { getPostsByPostId, TPost } from '../../services/postServices';
import { getComments , addComment , TComment } from '../../services/commentServices';
import { Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Divider } from '@mui/material'
import blogcard from "../../images/blogcard.jpeg"

const BlogCard: FC = () => {
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
        userName:(localStorage.getItem('userName') || '') , 
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
        <Container maxWidth="lg">
            <Card sx={{ marginTop: '20px' }}>
                <CardActions sx={{ bgcolor: '-moz-initial' }}>
                    <Box>
                        <Box ml={2}>
                            <Typography variant="subtitle2" color="textSecondary" component="h3">
                                Author : "username"
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                Created : "saat"
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
                    <Typography>Comments</Typography>
                </CardContent>
                <Divider />
            </Card>
        </Container>
    )
}

export default BlogCard