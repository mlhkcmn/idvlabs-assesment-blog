import { FC , useEffect } from 'react'

import { 
  Container, 
  Grid 
} from '@mui/material'
import UserPost from '../../components/UserPost/UserPost';

const MyPosts :FC = () => {
  useEffect(() => {
    if(localStorage.getItem('userName') && localStorage.getItem('userId')) {
        return;
    } else {
        window.location.href = "/login";
    }
}, []);

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2} sx={{ marginTop: '5px' }}>
          <UserPost  />
        </Grid>
      </Container>
    </>
  )
}

export default MyPosts