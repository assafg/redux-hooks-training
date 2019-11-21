import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from '../../redux/slices';
export interface ICounterProps {}

export function Counter(props: ICounterProps) {
    const count = useSelector((state: any) => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button
                    onClick={() => dispatch(counterSlice.actions.increment())}
                >
                    +
                </button>
                <button
                    onClick={() => dispatch(counterSlice.actions.decrement())}
                >
                    -
                </button>
            </div>
        </div>
    );
}
