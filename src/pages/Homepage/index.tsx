import { FC } from 'react'
import { Container } from '@mui/material';
import HeroSlider from '../../components/HeroSlider';
import BlogCard from '../../components/AllPost';

const Home :FC = () => {

  return (
    <>
      <HeroSlider />
      <Container maxWidth="lg">
        <BlogCard />
      </Container>
    </>
  );
}

export default Home;