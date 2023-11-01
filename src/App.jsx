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
  DarkMode,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

/*
type Todo {
  id: number;
  name: strinig;
  done: boolean;
  due: string;
  categoryId: number;
};

type Category {
  id: number;
  name: string;
  todos: Todo[];
}
*/

export default function App() {
  const [categories, setCategories] = useState([
    {
      name: "category 1",
      todos: [
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
      ],
    },
  ]);

  function handleAddCategory() {
    const newCategory = {
      name: "new category",
      todos: [],
    };

    setCategories([...categories.slice(), newCategory]);
  }

  function handleAddTodo(categoryIdx) {
    const newCategories = categories.slice();
    newCategories[categoryIdx].todos.push({
      name: "New Todo",
      done: false,
      due: "None",
    });

    setCategories(newCategories);
  }

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
            width="100%"
            p="15px"
            mb="40px"
            bg="blue.800"
            opacity="0.9"
            fontFamily={"Poppins, sans-serif"}
          >
            Current todo name
          </Heading>

          {categories.map((category, idx) => {
            return (
              <Category
                category={category}
                onAddTodo={() => handleAddTodo(idx)}
              />
            );
          })}

          <Spacer />

          <Button
            width="700px"
            my="50px"
            colorScheme="blackAlpha"
            onClick={handleAddCategory}
          >
            Add Category
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

function Category({ category, onAddTodo }) {
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
          onClick={category.onPlay}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Todos todos={category.todos} />
      </Collapse>
    </>
  );
}

function Todo(props) {
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

function Todos({ todos }) {
  return (
    <Flex direction="column" gap="10px" padding="10px" align="center" w="750px">
      {todos.map((todo, idx) => (
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

function TodoListButton(props) {
  return (
    <Button colorScheme="whiteAlpha" variant="solid">
      {props.name}
    </Button>
  );
}
