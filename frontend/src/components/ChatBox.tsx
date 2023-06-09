import { Box } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';
import SingleChat from './SingleChat';

const ChatBox = ({ fetchAgain, setFetchAgain }: any) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? 'flex' : 'none', md: 'flex' }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="#44475a"
      w={{ base: '100%', md: '68%' }}
      borderRadius="lg"
      borderWidth="1px"
      borderColor='#6272a4'
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
