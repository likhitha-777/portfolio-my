"use client"
import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const res = await fetch(`${API_URL}/c/bd4e-a96f-42b7-91ea`);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const json = await res.json();
        setAboutData(json.home); // Adjust based on actual response structure
      } catch (error) {
        setError(error);
        console.error('Failed to fetch about data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load about data.</p>;
  }

  if (!aboutData || !aboutData.aboutSection) {
    return <p>No about data available.</p>;
  }

  return (
    <Container>
      {/* About Me Section */}
      <Box id={aboutData.aboutSection.id} my={6} display="flex" justifyContent="center" textAlign="center" sx={{ cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' } }}>
        <Box maxWidth="800px" px={4}>
          <Typography variant="h3" gutterBottom>
            {aboutData.aboutSection.title}
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
            {aboutData.aboutSection.content}
            I've honed my expertise in a wide range of technologies, including React JS, Next.js, Node.js, and the MERN stack. I have a keen interest in developing interactive user interfaces, building robust REST APIs, and ensuring responsive design principles. My projects span across diverse domains, from e-commerce platforms and content management systems to more complex enterprise-level applications.

Over the years, I’ve worked on projects of various scales—from small, personal websites to large, data-driven applications used by thousands of users daily.
My ability to collaborate effectively with cross-functional teams has allowed me to deliver projects on time while meeting high standards of quality and performance
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
