import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/counterSlice";

const HomePage = () => {
    const counters = useSelector((state) => state.counters);
    const [inputValue, setInputValue] = useState(0);
    const dispatch = useDispatch();
    console.log(counters);

    const totalCount = counters?.value;

    const handleIncrement = () => {
        dispatch(increment(2));
    };
    const handleDecrement = () => {
        dispatch(decrement(1));
    };

    return (
        <section className="max-width flex justify-center items-center gap-10 mt-20">
            <button
                className="p-4 bg-green-700 text-white rounded-md"
                onClick={handleIncrement}
            >
                Increment
            </button>
            <h1 className="text-2xl">{totalCount}</h1>
            <button
                className="p-4 bg-red-700 text-white rounded-md"
                onClick={handleDecrement}
            >
                Decrement
            </button>
        </section>
    );
};

export default HomePage;
