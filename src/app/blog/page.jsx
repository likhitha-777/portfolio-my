"use client"

// src/app/page.js
import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Stack, Grid } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <Box my={10}>
        <Typography variant="h3" gutterBottom textAlign='center'>
          {home.blogsSection.title}
        </Typography>
        <Grid container spacing={4} my={3}>
          {home.blogsSection.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box p={2} border="1px solid lightgray" borderRadius="8px" sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h6" color="textSecondary">
                  <ul>
                    {item.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
      </Box>
    </Container>
  );
}
