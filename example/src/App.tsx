import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment } from "./features/counter/counterSlice";
import { Button } from "@chakra-ui/react";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="card">
        <Button onClick={() => dispatch(increment())} colorScheme="blue">
          Count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
