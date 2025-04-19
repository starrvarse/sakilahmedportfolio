"use client";

import Image from 'next/image';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faStar } from '@fortawesome/free-solid-svg-icons';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '@/app/providers';

// Custom styled components
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  '&.active': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  fontWeight: 600,
  fontSize: '1.5rem',
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Navbar = () => {
  const { mode, setMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0.5rem 0' }}>
          {/* Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', width: 60, height: 60 }}>
              <Image 
                src="/images/userAsset/NavLogo.jpg" 
                alt="Logo" 
                width={60} 
                height={60} 
                style={{ borderRadius: '50%' }}
              />
            </Box>
            <LogoText variant="h6">Sakil Ahmed</LogoText>
          </Box>
          
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          {/* Desktop navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NextLink href="#projects" passHref style={{ textDecoration: 'none' }}>
                <NavButton>Projects</NavButton>
              </NextLink>
              <NextLink href="#skills" passHref style={{ textDecoration: 'none' }}>
                <NavButton>Skills</NavButton>
              </NextLink>
              <NextLink href="#contactme" passHref style={{ textDecoration: 'none' }}>
                <NavButton>Contact Me</NavButton>
              </NextLink>
              
              {/* Theme toggle buttons */}
              <Box sx={{ display: 'flex', marginLeft: 2 }}>
                <StyledIconButton 
                  onClick={() => setMode('light')} 
                  className={mode === 'light' ? 'active' : ''}
                  title="Light Mode"
                  size="small"
                >
                  <FontAwesomeIcon icon={faSun} />
                </StyledIconButton>
                <StyledIconButton 
                  onClick={() => setMode('dark')} 
                  className={mode === 'dark' ? 'active' : ''}
                  title="Dark Mode"
                  size="small"
                >
                  <FontAwesomeIcon icon={faMoon} />
                </StyledIconButton>
                <StyledIconButton 
                  onClick={() => setMode('night')} 
                  className={mode === 'night' ? 'active' : ''}
                  title="Night Mode"
                  size="small"
                >
                  <FontAwesomeIcon icon={faStar} />
                </StyledIconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
