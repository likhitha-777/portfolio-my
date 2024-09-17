"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Material UI imports
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null); // Removed TypeScript types
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event) => { // Removed type annotation
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
            My Portfolio
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  sx: {
                    padding: 0,
                  },
                }}
              >
                <MenuItem component={Link} href="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link href="/about" passHref>
                    About
                  </Link>
                </MenuItem>
                <MenuItem component={Link} href="/blog" onClick={handleMenuClose}>
                  Blogs
                </MenuItem>
                <MenuItem component={Link} href="/contact" onClick={handleMenuClose}>
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link href="/" passHref>
                  Home
                </Link>
              </Button>

              <Button color="inherit">
                <Link href="/about" passHref>
                  About
                </Link>
              </Button>

              <Button color="inherit">
                <Link href="/blog" passHref>
                  Blogs
                </Link>
              </Button>

              <Button color="inherit">
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
