'use client'

import { useCounterStore } from "../../provider/counter-store-provider";




 const Counter = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <div>
      Count: {count}
      <hr /> <br></br>
      <button  className="border border-red-50 mr-5" type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button className="border border-red-50"  type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  )
}

export default Counter;