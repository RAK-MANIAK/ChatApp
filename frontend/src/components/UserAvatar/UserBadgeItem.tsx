import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const UserBadgeItem = ({ user, handleFunction }: any) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      fontSize={12}
      bg="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
