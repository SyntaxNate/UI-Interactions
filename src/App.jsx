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
                    whileTap={{ scale:0.9}}
                    whileHover={{ y: -4 }}
                >
                  Bounce Button
                </MotionButton>
            </Stack>

        </div>
    )
}

export default App;