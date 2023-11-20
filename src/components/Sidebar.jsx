import { Flex, LightMode, Input } from "@chakra-ui/react";
import TodoListButton from "./TodoListButton";

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      bg="black"
      padding="20px"
      gap="20px"
      width="25%"
      opacity="0.8"
    >
      <LightMode>
        <Input placeholder="Search" variant="filled" />
      </LightMode>

      <TodoListButton name="Todo List 1" />
      <TodoListButton name="Todo List 2" />
      <TodoListButton name="Todo List 3" />
    </Flex>
  );
}
