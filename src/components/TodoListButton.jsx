import { Button } from "@chakra-ui/react";

export default function TodoListButton(props) {
  return (
    <Button colorScheme="whiteAlpha" variant="solid">
      {props.name}
    </Button>
  );
}
