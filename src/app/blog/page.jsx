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
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const handleShowMoreSkills = () => {
    setShowMoreSkills((prev) => !prev); // Toggle the state
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
      {home.blogsSection && home.blogsSection.items && (
        <Box my={15}>
          <Typography variant="h4" gutterBottom textAlign="center">MY BLOGS</Typography>
          {/*    */}
          <Grid container spacing={4}>
            {home.blogsSection.items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}  sx={{ cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' } }}>
                <Box p={2} border="1.5px solid lightgray" borderRadius="19px" >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.title === "Technical Skills" ? (
                      <ul>
                        {/* Display the first 5 skills */}
                        {item.content.slice(0, 6).map((contentItem, i) => (
                          <li key={i}>{contentItem}</li>
                        ))}
                        {/* Conditionally render more skills */}
                        {showMoreSkills && (
                          <>
                            {item.content.slice(5).map((contentItem, i) => (
                              <li key={i}>{contentItem}</li>
                              
                            ))}
                          </>
                        )}
                      </ul>
                    ) : (
                      <ul>
                        {item.content.map((contentItem, i) => (
                          <li key={i}>
                            <li>{contentItem}</li>
                            <li>{contentItem}</li>
                           
                          
                          </li>
                        ))}
                      </ul>
                    )}
                  </Typography>
                  {/* Show "More" button for Technical Skills */}
                  {item.title === "Technical Skills" && (
                    <Button
                      variant="text"
                      color="primary"
                      onClick={handleShowMoreSkills}
                    >
                      {showMoreSkills ? "Show Less" : "More"}
                    </Button>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
          
        </Box>
      )}
    </Container>
  );
}
