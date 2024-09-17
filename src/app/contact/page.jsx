import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/material/Typography";
import Link from 'next/link';

export default function Contact() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      sx={{ my: 8, maxWidth: '500px', mx: 'auto' }} // Center and limit width
    >
      {/* Heading */}
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Connect with Me
      </Typography>

      {/* Social Media Links */}
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>Social Media</Typography>

      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          width: "100%", // Full width for uniform look
          '&:hover': { backgroundColor: "#e8e8e8" },
        }}
      >
        <Link href="https://www.instagram.com/" passHref target="_blank">
          <Stack direction="row" spacing={2} alignItems="center">
            <InstagramIcon sx={{ color: "#686A6A", width: 30, height: 30 }} /> {/* Same size */}
            <Typography sx={{ color: "#686A6A", fontWeight: 'medium' }}>Instagram</Typography>
          </Stack>
        </Link>
      </Box>

      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          width: "100%",
          '&:hover': { backgroundColor: "#e8e8e8" },
        }}
      >
        <Link href="https://github.com/" passHref target="_blank">
          <Stack direction="row" spacing={2} alignItems="center">
            <GitHubIcon sx={{ color: "#686A6A", width: 30, height: 30 }} />
            <Typography sx={{ color: "#686A6A", fontWeight: 'medium' }}>GitHub</Typography>
          </Stack>
        </Link>
      </Box>

      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          width: "100%",
          '&:hover': { backgroundColor: "#e8e8e8" },
        }}
      >
        <Link href="https://www.linkedin.com/in/your-linkedin-profile" passHref target="_blank">
          <Stack direction="row" spacing={2} alignItems="center">
            <LinkedInIcon sx={{ color: "#686A6A", width: 30, height: 30 }} />
            <Typography sx={{ color: "#686A6A", fontWeight: 'medium' }}>LinkedIn</Typography>
          </Stack>
        </Link>
      </Box>

      {/* Contact Section */}
      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>Contact Me</Typography>

      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          width: "100%",
          '&:hover': { backgroundColor: "#e8e8e8" },
        }}
      >
        <Link href="mailto:youremail@example.com" passHref>
          <Stack direction="row" spacing={2} alignItems="center">
            <EmailIcon sx={{ color: "#686A6A", width: 30, height: 30 }} />
            <Typography sx={{ color: "#686A6A", fontWeight: 'medium' }}>youremail@example.com</Typography>
          </Stack>
        </Link>
      </Box>

      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          width: "100%",
          '&:hover': { backgroundColor: "#e8e8e8" },
        }}
      >
        <Link href="tel:+1234567890" passHref>
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon sx={{ color: "#686A6A", width: 30, height: 30 }} />
            <Typography sx={{ color: "#686A6A", fontWeight: 'medium' }}>+123 456 7890</Typography>
          </Stack>
        </Link>
      </Box>
    </Stack>
  );
}
