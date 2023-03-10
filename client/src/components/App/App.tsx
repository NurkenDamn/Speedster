import { Box } from '@chakra-ui/react'

import { AboutSection, Navbar, SpeedSection } from '../index'

const App = () => {

  return (
    <Box>
      <Navbar />
      <SpeedSection />
      <AboutSection />
    </Box>
  );
};


export default App;