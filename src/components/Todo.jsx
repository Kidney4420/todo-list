import { DarkMode, Flex, Checkbox, Spacer } from "@chakra-ui/react";

export default function Todo(props) {
  return (
    <DarkMode>
      <Flex
        direction="row"
        gap="10px"
        rounded="md"
        padding="10px"
        maxWidth="700px"
        width="full"
        bg="blackAlpha.600"
        color="whiteAlpha.600"
      >
        <Checkbox /*isChecked={props.done}*/ />
        {props.name}
        <Spacer />
        {props.due}
      </Flex>
    </DarkMode>
  );
}
