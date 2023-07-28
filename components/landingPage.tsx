//  THIS CODE WAS GENERATED BY AI
"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { backgroundGradient } from '@/components/ui/constants';
import NextLink from 'next/link';

const Root = styled('div')({
  height: '100vh',
  backgroundImage: backgroundGradient,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Title = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '128px',
  textAlign: 'center',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '28px',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Use MUI's primary color
  color: '#ffffff',
  padding: '10px 30px',
  '&:hover': {
    opacity: 0.8,
  },
}));

const CenteredButton = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px',
});

const LandingPage = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <Root>
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <Title variant="h1">Welcome to Co-Poet</Title>
        <Subtitle variant="h4">A Collaborative Poetry Generator</Subtitle>
        <CenteredButton>
          <NextLink href="/start" passHref>
            <StyledButton variant="contained" size="large">
              Get Started
            </StyledButton>
          </NextLink>
        </CenteredButton>
      </motion.div>
    </Root>
  );
};

export default LandingPage;
