import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      HomePage
      <Link href="/admin">To admin page</Link>
    </Box>
  );
}
