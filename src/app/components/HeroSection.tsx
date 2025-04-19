"use client";

import Image from 'next/image';
import { useEffect, useRef, useContext } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { ThemeContext } from '@/app/providers';
import SendIcon from '@mui/icons-material/Send';

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5rem',
  margin: '4rem auto',
  padding: '0 1rem',
  paddingBottom: '8rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '3rem',
  },
}));

const FadedText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  userSelect: 'none',
  fontSize: '7em',
  color: theme.palette.mode === 'light' ? 'rgba(231,231,231,0.8)' : 'rgba(26,26,58,0.8)',
  bottom: '-16%',
  left: '-5%',
  fontWeight: 'bold',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '4em',
    bottom: '-10%',
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  zIndex: 1,
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '35px',
  color: theme.palette.mode === 'light' ? '#343d68' : theme.palette.primary.light,
  fontWeight: 500,
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '45px',
  lineHeight: '45px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px',
    lineHeight: '35px',
  },
}));

const Role = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
}));

const Description = styled(Typography)(({ theme }) => ({
  marginTop: '1rem',
  width: '70%',
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const HireButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#e84949' : theme.palette.primary.main,
  color: 'white',
  padding: '0.5rem 1.5rem',
  boxShadow: '5px 5px 7px 0px rgba(0,0,0,0.25)',
  fontWeight: 500,
  borderRadius: '5px',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'all 0.5s',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'light' ? '#e84949' : theme.palette.primary.main,
    border: `2px solid ${theme.palette.mode === 'light' ? '#e84949' : theme.palette.primary.main}`,
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '400px',
  height: '400px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
}));

const UserImageContainer = styled(motion.div)(() => ({
  position: 'relative',
  padding: '2.5rem',
  zIndex: 1,
}));

const FloatingIcon = styled(motion.div)(() => ({
  position: 'absolute',
  zIndex: 2,
}));

const HeroSection = () => {
  const el = useRef(null);
  const { mode } = useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <HeroContainer>
        <FadedText variant="h1">Sakil Ahmed</FadedText>

        <LeftSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading variant="h2">Hi! Sakil Ahmed here</Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SubHeading variant="h1">
              I am a <Role ref={el}></Role>
            </SubHeading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Description variant="body1">
              I&apos;m an aspiring software developer and here is my portfolio website. Here you&apos;ll
              learn about my journey as a software developer.
            </Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HireButton 
              variant="contained" 
              endIcon={<SendIcon />}
            >
              Hire me
            </HireButton>
          </motion.div>
        </LeftSection>

        <RightSection>
          <UserImageContainer
            initial={{ filter: 'grayscale(1)' }}
            animate={{ 
              filter: ['grayscale(0)', 'grayscale(1)', 'grayscale(0)'],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image 
              src="/images/userAsset/UserImage.png" 
              alt="Sakil Ahmed" 
              width={400} 
              height={400}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                boxShadow: mode === 'light' ? '0px 0px 20px rgba(0,0,0,0.1)' : '0px 0px 20px rgba(0,0,0,0.5)'
              }}
            />
          </UserImageContainer>
          
          <FloatingIcon
            style={{ bottom: '-1rem', right: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/userAsset/dots.png" alt="dots" width={70} height={70} />
          </FloatingIcon>
          
          <FloatingIcon
            style={{ top: '-0.8em', right: '1em' }}
            animate={{ rotateY: [0, 180, 360], y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/userAsset/cube.png" alt="cube" width={70} height={70} />
          </FloatingIcon>
          
          <FloatingIcon
            style={{ left: 0, bottom: 0 }}
            animate={{ 
              left: ['0%', '5%', '0%'],
              bottom: ['0%', '10%', '0%']
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/images/userAsset/circle.png" alt="circle" width={70} height={70} />
          </FloatingIcon>
          
          <FloatingIcon
            style={{ top: '1.5em', left: '-0.3em' }}
            animate={{ 
              left: ['-0.3em', '5%', '-0.3em'],
              top: ['1.5em', '2%', '1.5em']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/userAsset/zigzags.png" alt="zigzag" width={70} height={70} />
          </FloatingIcon>
          
          <FloatingIcon
            style={{ top: '-0.8rem', left: '50%' }}
            animate={{ 
              top: ['-0.8rem', '3%', '-0.8rem'],
              left: ['50%', '48%', '50%']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/userAsset/plus.png" alt="plus" width={70} height={70} />
          </FloatingIcon>
        </RightSection>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
