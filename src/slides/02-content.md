### Why Redux Hooks?

When using React Hooks, it is more intuitive to also use Reac-Redux Hooks

---

As with `connect()`, wrap your code with a `Provider`

```javascript
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

---

### useSelector()

```typescript
const result : any = useSelector(selector : Function, equalityFn? : Function)
```

-   Similar to `mapStateToProps`.
-   Allows to extract data from the store.
-   The selector recieves the entire store as paramater
-   `equalityFn` optionally used to deep compare

---

## Example

```typescript
import React from 'react';
import { useSelector } from 'react-redux';

export const CounterComponent = () => {
    const counter = useSelector(state => state.counter);
    return <div>{counter}</div>;
};
```

---

### Practice

Create a `"connected"` component with the `useSelector` hook.

---

### useDispatch()

```typescript
const dispatch = useDispatch();
```

---

## Example

```javascript
import React from 'react';
import { useDispatch } from 'react-redux';

export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <span>{value}</span>
            <button onClick={() => dispatch({ type: 'increment-counter' })}>
                Increment counter
            </button>
        </div>
    );
};
```

---

## Another Example

```typescript
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
```

---

### Passing `dispatch` to child components

```javascript
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch();
    const incrementCounter = useCallback(
        () => dispatch({ type: 'increment-counter' }),
        [dispatch]
    );

    return (
        <div>
            <span>{value}</span>
            <MyIncrementButton onIncrement={incrementCounter} />
        </div>
    );
};

export const MyIncrementButton = React.memo(({ onIncrement }) => (
    <button onClick={onIncrement}>Increment counter</button>
));
```
