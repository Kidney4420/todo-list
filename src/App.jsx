import {
  ChakraProvider,
  Flex,
  Button,
  Spacer,
  Checkbox,
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
  return (
    <ChakraProvider>
      <Flex direction="row" height="100vh">
        <Sidebar />
        <Todos />
      </Flex>
    </ChakraProvider>
  );
}

function Todo(props) {
  return (
    <Flex direction="row" gap="10px" bg="gray.400" rounded="md" padding="10px">
      <Checkbox isChecked={props.done} />
      {props.name}
      <Spacer />
      {props.due}
    </Flex>
  );
}

function Todos() {
  return (
    <Flex direction="column" width="full" gap="10px" padding="10px">
      {todos.map((todo) => (
        <Todo {...todo} />
      ))}
    </Flex>
  );
}

function Sidebar() {
  return (
    <Flex direction="column" bg="gray.300" padding="20px" gap="20px">
      <Button>A</Button>
      <Button>B</Button>
      <Button>C</Button>
    </Flex>
  );
}

// import {
//   Flex,
//   Heading,
//   Button,
//   Spacer,
//   useColorMode,
//   useColorModeValue,
//   Checkbox,
//   CheckboxGroup,
// } from "@chakra-ui/react";

// function NavBar() {
//   const background = useColorModeValue("gray.300", "gray.900");

//   return (
//     <>
//       <Flex
//         as="nav"
//         p="1em"
//         bg={background}
//         align="center"
//         w="full"
//         gap="10px"
//         direction="r"
//       >
//         <Heading size="sm">Todo List</Heading>
//         <Spacer />
//         <Button colorScheme="teal">Sign up</Button>
//         <Button>Log in</Button>
//       </Flex>
//     </>
//   );
// }

// function Todo(props) {
//   const background = useColorModeValue("gray.300", "gray.900");

//   return (
//     <>
//       <Flex
//         direction="row"
//         align="left"
//         gap="10px"
//         py="10px"
//         px="20px"
//         m="10px"
//         bg={background}
//         rounded="lg"
//       >
//         <Checkbox spacing="15px ">{props.name}</Checkbox>
//       </Flex>
//     </>
//   );
// }

// export default function App() {
//   const { toggleColorMode } = useColorMode();
//   const todos = [
//     "todo 1",
//     "eat food",
//     "a",
//     "b",
//     "fjdksla;fl;kjsdal;kjfsadl;kjfdc",
//   ];

//   return (
//     <>
//       <Flex direction="column" align="center" gap="10px">
//         <NavBar />
//         <Button onClick={toggleColorMode}>
//           Switch to {useColorModeValue("dark", "light")} mode
//         </Button>
//       </Flex>

//       <Flex
//         direction="column"
//         align="center"
//         justify="center"
//         gap="10px"
//         w="60%"
//       >
//         {todos.map((todo) => {
//           return <Todo name={todo} key={todo} />;
//         })}
//       </Flex>
//     </>
//   );
// }
