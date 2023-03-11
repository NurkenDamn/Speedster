import { Box } from '@chakra-ui/react'

import { Navbar, SpeedSection, AboutSection, ContactsSection, CTA, Footer } from '../index'

const App = () => {

  return (
    <Box>
      <Navbar />
      <SpeedSection />
      <AboutSection />
      <CTA />
      <ContactsSection />
      <Footer />
    </Box>
  );
};


export default App;