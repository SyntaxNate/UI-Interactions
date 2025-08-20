import React from "react";
import { Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Stack spacing={4}>
                {/* Bounce Effect */}
                <MotionButton 
                    variant="contained"
                    whileTap={{ scale:0.9 }}
                    whileHover={{ y: -4 }}
                >
                  Bounce Button
                </MotionButton>

                {/* Rotate on Click */}
                <MotionButton
                    variant="outlined"
                    whileTap={{ rotate: 360}}
                >
                  Spin Button 
                </MotionButton>

                {/* Fade + Slide */}
                <MotionButton
                    Variant="contained"
                    whileHover={{ opacity: 0.8, x: 10 }}
                >

                  Slide & Fade    
                </MotionButton>

                {/* Grow on Hover */}
                <MotionButton
                    variant="outlined"
                    whileHover={{ scale: 1.1 }}
                >

                  Grow on Hover
                </MotionButton>
            </Stack>

        </div>
    )
}

export default App;