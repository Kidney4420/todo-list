import {
  ChakraProvider,
  Flex,
  Button,
  Spacer,
  Checkbox,
  Input,
  Heading,
  useDisclosure,
  Collapse,
  IconButton,
  LightMode,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";

const todos = [
  {
    name: "Wash the cat",
    done: true,
    due: "Yesterday",
  },
  {
    name: "Learn React",
    done: false,
    due: "Tomorrow",
  },
  {
    name: "Sleep",
    done: false,
    due: "Eventually",
  },
];

export default function App() {
  // const [currentTodo, setCurrentTodo] = useState(0);

  return (
    <ChakraProvider>
      <Flex
        direction="row"
        height="100vh"
        width="100vw"
        bg="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://bit.ly/2Z4KKcF')"
        bgSize={"cover"}
        backgroundPosition={"center"}
      >
        <Sidebar />
        <Flex direction="column" width="100%" align="center">
          <Heading
            as="h1"
            size="l"
            align="center"
            width="1180px"
            p="15px"
            mb="40px"
            bg="blue.800"
            opacity="0.9"
            fontFamily={"Poppins, sans-serif"}
          >
            Current todo name
          </Heading>
          <Category />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

function Category() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex w="900px" bg="whiteAlpha.400" rounded="md" p="5px" align="center">
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={onToggle}
          variant="ghost"
          colorScheme="gray"
        />
        <Spacer />
        Category
        <Spacer />
        <IconButton icon={<AddIcon />} variant="ghost" colorScheme="gray" />
      </Flex>

      {/* <Button
        onClick={onToggle}
        bg="whiteAlpha.600"
        colorScheme="blue"
        w="900px"
        borderRadius="0"
      >
        Category Name
      </Button> */}
      <Collapse in={isOpen} animateOpacity>
        <Todos />
      </Collapse>
    </>
  );
}

function Todo(props) {
  return (
    <Flex
      direction="row"
      gap="10px"
      rounded="md"
      padding="10px"
      maxWidth="700px"
      width="full"
      bg="black"
      opacity="0.7"
    >
      <Checkbox /*isChecked={props.done}*/ />
      {props.name}
      <Spacer />
      {props.due}
    </Flex>
  );
}

function Todos() {
  return (
    <Flex direction="column" gap="10px" padding="10px" align="center" w="750px">
      {todos.map((todo) => (
        <Todo {...todo} />
      ))}
    </Flex>
  );
}

function Sidebar() {
  return (
    <Flex
      direction="column"
      bg="black"
      padding="20px"
      gap="20px"
      width="450px"
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

function TodoListButton(props) {
  return (
    <Button colorScheme="whiteAlpha" variant="solid">
      {props.name}
    </Button>
  );
}
