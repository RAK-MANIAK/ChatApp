import { useEffect } from 'react';
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    const user = cookies.get('userInfo');

    if (user) {
      navigate('/chats');
    }

    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#44475a"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="#6272a4"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          My Chat
        </Text>
      </Box>
      <Box
        bg="#44475a"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="#6272a4"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" _selected={{bg: '#bd93f9'}} color='#f8f8f2'>Login</Tab>
            <Tab width="50%" _selected={{bg: '#bd93f9'}} color='#f8f8f2'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
