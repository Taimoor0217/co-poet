'use client'
import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Button, Grid, Paper, Card, CardContent, CardActions } from '@mui/material';
import { languages } from '@/lib/languages';
import { modes } from '@/lib/modes';
import { useRouter } from 'next/navigation'
import { backgroundGradient } from '@/components/ui/constants';
import { motion } from 'framer-motion';
import React from 'react';

const Root = styled('div')({
    height: '100vh',
    // backgroundImage: backgroundGradient,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#f0f0f0',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: '#2c5364',
    textAlign: 'center',
    marginBottom: theme.spacing(4)
}));

const StyledCard = styled('div')(({ theme }) => ({
    margin: theme.spacing(2),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        border: '1px solid #839bae',
        color: '#ffffff',
        cursor: 'pointer'
    },
    '&.active': {
        border: '1px solid #839bae',
        },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
    color: '#0f2027',
    fontWeight: 'bold',
}));

const CardSubtitle = styled(Typography)(({ theme }) => ({
    color: '#2c5364',
}));

const LandingButton = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    padding: '10px 30px',
    '&:hover': {
        cursor: 'pointer'
    },
}));


export default function StartPage() {
    const [language, setLanguage] = useState('');
    const [mode, setMode] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (language && mode) {
            router.push(`${language}/${mode}`)
        }
    }
    const handleLanguageChange = (value: any) => {
        setLanguage(value);
    }

    const handleModeChange = (value: any) => {
        setMode(value);
    }

    return (
        <Root>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <Subtitle variant="h4">Select a language and mode to continue</Subtitle>
            </motion.div>
            <StyledPaper>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} direction="column">
                            {languages.map((option) => (
                                <div key={`${option.title} ${option.code}`} onClick={() => handleLanguageChange(option.code)}>
                                    <Grid item xs={12} key={option.title}>
                                        <StyledCard
                                            sx={{
                                                border: language === option.title ? '2px solid #3a1c71' : '',
                                            }}
                                            className={language === option.code ? 'active' : 'normal'}
                                        >
                                            <CardContent>
                                                <CardTitle variant="h5">{option.title}</CardTitle>
                                            </CardContent>
                                        </StyledCard>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            {Object.values(modes).map((option) => (
                                <Grid item xs={12} key={option.code}>
                                    <StyledCard
                                        className={mode === option.code ? 'active' : 'normal'}
                                        onClick={() => handleModeChange(option.code)}
                                        sx={{
                                            border: mode === option.title ? '2px solid #3a1c71' : '',
                                        }}
                                    >
                                        <CardContent>
                                            <CardTitle variant="h5">{option.title}</CardTitle>
                                            <CardSubtitle variant="body2" marginTop={1}>
                                                {option.description}
                                            </CardSubtitle>
                                        </CardContent>
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <LandingButton
                        sx={{
                            marginTop: 2, // Add margin top to the button
                        }}
                        onClick={handleSubmit}
                    >
                        Get Started
                    </LandingButton>
                </Grid>
            </StyledPaper>
        </Root>
    );
};
