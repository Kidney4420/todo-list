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
  Box,
} from "@chakra-ui/react";

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
      <Flex direction="row" height="100vh" width="100vw" bg="gray.800">
        <Sidebar />
        <Flex direction="column" width="100%" align="center">
          <Title name="current todo name" />
          <Category />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

// export default function App() {
//   // const [currentTodo, setCurrentTodo] = useState(0);

//   return (
//     <ChakraProvider>
//       <Flex direction="row" height="100vh" width="100vw" bg="gray.800">
//         <Sidebar />
//         <Flex direction="column" width="100%" align="center">
//           <Title name="current todo name" />
//           <Category />
//           {/* <Todos /> */}
//         </Flex>
//       </Flex>
//     </ChakraProvider>
//   );
// }

function Title(props) {
  return (
    <Heading
      as="h1"
      size="xl"
      align="center"
      width="1180px"
      p="15px"
      mb="15px"
      bg="black"
    >
      {props.name}
    </Heading>
  );
}

function Category() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Category Name</Button>
      <Collapse in={isOpen} animateOpacity>
        <Todos />
      </Collapse>
    </>
  );
}

// function CategoryBar(props) {
//   return (
//     <Heading as="h2" size="l" align="center" p="15px" mb="15px" bg="gray.500">
//       {props.name}
//     </Heading>
//   );
// }

function Todo(props) {
  return (
    <Flex
      direction="row"
      gap="10px"
      bg="gray.400"
      rounded="md"
      padding="10px"
      maxWidth="400px"
      width="full"
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
    <Flex direction="column" gap="10px" padding="10px" align="center">
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
      <SearchBar />

      <TodoListButton name="Todo List 1" />
      <TodoListButton name="Todo List 2" />
      <TodoListButton name="Todo List 3" />
    </Flex>
  );
}

function SearchBar() {
  return <Input placeholder="Search" />;
}

function TodoListButton(props) {
  return <Button bg="gray.800">{props.name}</Button>;
}
