import { FC , useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import blogcard from "../../images/blogcard.jpeg"
import SearchIcon from '@mui/icons-material/Search'
import { 
    CardActionArea, 
    CardMedia, 
    CardContent, 
    Typography, 
    CardActions, 
    Box, 
    Grid, 
    Card, 
    TextField 
} from '@mui/material'
import { getAllPosts, TPost} from '../../services/postServices'

const BlogCard :FC = () => {
    const [posts, setPosts] = useState<TPost[]>([]);
    const [search, setSearch] = useState('')
    const getPosts = async () => {
        setPosts(await getAllPosts())
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Grid container spacing={3} direction={"row"} sx={{ marginTop: '5px' }}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' , alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label="Search Blog" variant="standard" onChange={event => {setSearch(event.target.value)}} sx={{ width: '495px' }} />
                    </Box>
                </Grid>
                {posts.filter((post)=> {
                    if (search === "") {
                        return post
                    } else if (post.header.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                        return post
                    }
                }).map((post) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardActionArea href='/blog-full-page'
                                    onClick={() => localStorage.setItem('postId', post.id.toString())}>
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
                                <CardActions sx={{ bgcolor: '-moz-initial' }}>
                                    <Box>
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" color="textSecondary" component="h3">
                                                Author : "{post.userName}"
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                                Created : {moment(post.createDate).format('DD.MM.YYYY , h:mm:s')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default BlogCard