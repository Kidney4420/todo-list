import { Flex } from "@chakra-ui/react";
import Todo from "./Todo.jsx";

export default function Todos({ todos }) {
  return (
    <Flex direction="column" gap="10px" padding="10px" align="center" w="750px">
      {todos.map((todo, idx) => (
        <Todo {...todo} />
      ))}
    </Flex>
  );
}
