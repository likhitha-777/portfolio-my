"use client"

// src/app/page.js
import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Stack, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const [showMoreSkills, setShowMoreSkills] = useState(false);
  
    const handleShowMoreSkills = () => {
      setShowMoreSkills(true);
    };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/c/1e67-34f3-4481-bfde`);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const json = await res.json();
        setHome(json.home); // Adjust based on actual response structure
      } catch (error) {
        setError(error);
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load data.</p>;
  }

  if (!home) {
    return <p>Data is not available.</p>;
  }

  return (
    <Container>
      {/* Intro Section */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center" justifyContent="center">
        <Box flex={1} display="flex" justifyContent="center" sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}>
          <Image
            src={home.intro.image.src}
            alt={home.intro.image.alt}
            width={home.intro.image.width}
            height={home.intro.image.height}
            style={{ borderRadius: home.intro.image.borderRadius }}
          />
        </Box>
        <Box flex={1} padding={2} sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }} >
          <Typography variant="h2" gutterBottom>
            {home.intro.heading}
          </Typography>
          <Typography variant="body1" paragraph>
            {home.intro.description}
          </Typography>
          <Stack direction="row" spacing={2}>
            {home.intro.buttons.map((button, index) => (
              <Link key={index} href={button.link} passHref>
                <Button variant={button.variant} color={button.color}>
                  {button.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>

      {/* About Me Section */}
      <Box id={home.aboutSection.id} my={9} display="flex" justifyContent="center" textAlign="center" sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}>
        <Box maxWidth="800px" px={4}>
          <Typography variant="h4" gutterBottom>
            {home.aboutSection.title}
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
            {home.aboutSection.content}
          </Typography>
          <Box textAlign="center" mt={4}>
            <Link href={home.aboutSection.moreButton.link} passHref>
              <Button variant={home.aboutSection.moreButton.variant} color={home.aboutSection.moreButton.color}>
                {home.aboutSection.moreButton.label}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Blogs Section */}
      <Box my={15} sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }} >
        <Typography variant="h4" gutterBottom textAlign='center'>
          {home.blogsSection.title}
        </Typography>
        <Grid container spacing={4} >
          {home.blogsSection.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box p={2} border="1.5px solid lightgray" borderRadius="19px">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>C</li>
                  <li>MERN Stack</li>
                  <li>REST API</li>
                  {/* Conditionally render more skills */}
                  {showMoreSkills && (
                    <>
                      <li>GraphQL</li>
                      <li>Postman</li>
                      <li>Vercel deployment</li>
                      <li>WIX UI</li>
                    </>
                  )}
                </ul>
                </Typography>
                {!showMoreSkills && (
                <Button
                  variant="text"
                  color="primary"
                  onClick={handleShowMoreSkills}
                >
                  More
                </Button>
              )}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={4}>
          <Link href={home.blogsSection.moreButton.link} passHref>
            <Button variant={home.blogsSection.moreButton.variant} color={home.blogsSection.moreButton.color}>
              {home.blogsSection.moreButton.label}
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
