import {
  ChakraProvider,
  Flex,
  Button,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

import Category from "./components/Category.jsx";
import Sidebar from "./components/Sidebar.jsx";

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
