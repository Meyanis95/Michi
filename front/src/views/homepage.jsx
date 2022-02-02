import '../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { CardActionArea } from '@mui/material';

export default function Homepage() {
  const [lessons, setLessons] = useState([
    {
      title: 'Hey, lesson 1',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 2',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 3',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 4',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 1',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 2',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 3',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 4',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 1',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 2',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 3',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
    {
      title: 'Hey, lesson 4',
      owner: 'goingiogngoin',
      description: 'Learn XYZ',
      address: '0xabc',
      amount: '10$',
      image:
        'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/Python%20(2).jpg',
    },
  ]);
  const navigate = useNavigate();

  const selectCourse = (lesson) => {
    console.log(lesson.address);
    navigate(`/courses/${lesson.address}`, { state: lesson });
  };

  return (
    <Container className="main-container" maxWidth="false">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography color="#FFFFFF" sx={{ mt: '10px' }}>
          Here are the best lessons on the platform yet!
        </Typography>
        {/* <TextField
          id="outlined-basic"
          variant="outlined"
          autoFocus
          placeholder=""
          sx={{
            backgroundColor: '#F4EDDE',
            width: { xs: '80vw', sm: '20vw' },
            borderColor: 'red',
            outline: 'none',
          }}
        /> */}
      </Box>
      <Grid
        container
        spacing={4}
        sx={{ mt: '10px', overflow: 'auto', maxHeight: { xs: 380, sm: 620 } }}
      >
        {lessons.length > 0
          ? lessons.map((lesson) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={lesson.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Card sx={{ minWidth: 420 }}>
                  <CardActionArea onClick={() => selectCourse(lesson)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={lesson.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {lesson.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lesson.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
}
