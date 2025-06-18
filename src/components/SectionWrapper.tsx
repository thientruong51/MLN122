import React from 'react';
import type { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface SectionWrapperProps {
  children: ReactNode;
  bgcolor?: string;
  py?: number;
  color?: string;
}

const SectionWrapper = ({ children, bgcolor = '#121212', py = 10, color = 'white' }: SectionWrapperProps) => (
  <Box sx={{ py, bgcolor, color }}>
    <Container>
      {children}
    </Container>
  </Box>
);

export default SectionWrapper;