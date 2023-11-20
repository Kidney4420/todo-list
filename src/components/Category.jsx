import {
  Flex,
  IconButton,
  Spacer,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import Todos from "./Todos";

export default function Category({ category, onAddTodo }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex bg="whiteAlpha.400" rounded="md" p="5px" align="center" width="70%">
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={onToggle}
          variant="ghost"
          colorScheme="gray"
        />
        <Spacer />
        {category.name}
        <Spacer />
        <IconButton
          icon={<AddIcon />}
          variant="ghost"
          colorScheme="gray"
          onClick={onAddTodo}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Todos todos={category.todos} />
      </Collapse>
    </>
  );
}
