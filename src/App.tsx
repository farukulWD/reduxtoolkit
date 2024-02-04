import { Button } from "@/components/ui/button";

import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-6 items-center p-10 border-2 border-green-400 rounded-sm">
        <Button
          onClick={() => dispatch(increment())}
          className="bg-green-400 text-white hover:bg-green-500"
        >
          Increment
        </Button>
        <h1>{count}</h1>
        <Button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 text-white hover:bg-red-500"
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
