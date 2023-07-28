"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import GoogleIcon from '@mui/icons-material/Google';
import { backgroundGradient } from '@/components/ui/constants';

const SignInPageContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const LandingHeading = styled(Typography)({
  color: '#0f2027', // White color for the heading
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: '20px', // Add some margin at the bottom of the heading
});

const SignInButton = styled('div')(({ theme }) => ({
  backgroundColor: '#f0f0f0', // Light gray background on hover
  color: '#0f2027', // Dark blue color for the button text
  padding: '25px 40px',
  fontWeight: 'bold',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#1976d2',
    color: 'white'
  },
}));

const GoogleIconWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export default function SignInPage() {
  const supabase = createClientComponentClient();

  const handleAuth = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      }
    });
  };

  return (
    <SignInPageContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <LandingHeading variant="h4">Sign in to continue</LandingHeading>
      </motion.div>
      <SignInButton onClick={handleAuth}>
        <GoogleIconWrapper>
          <GoogleIcon />
        </GoogleIconWrapper>
        Sign In With Google
      </SignInButton>
    </SignInPageContainer>
  );
}
