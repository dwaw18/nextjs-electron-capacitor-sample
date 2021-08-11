import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToGlobalCounter, globalCounter, subtractFromGlobalCounter } from '../../redux/reducers/applicationSlice';

const ReduxTest: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    const appGlobalCounter  =useSelector(globalCounter);

    function handleLocalAdd() {
        setCounter(counter + 1);
    }

    function handleLocalSubtract() {
        setCounter(counter - 1);
    }

    function handleGlobalAdd() {
        dispatch(addToGlobalCounter())
    }

    function handleGlobalSubtract() {
        dispatch(subtractFromGlobalCounter())
    }

    return <div>
        <h1>Redux</h1>

        <Card style={{padding: '16px', margin: 8}}>
            <h2>Global state</h2>

            <div>
                <Button onClick={handleGlobalAdd}>Add</Button>
                <Button onClick={handleGlobalSubtract}>Subtract</Button>
            </div>

            <h3>
                Global counter: {appGlobalCounter}
            </h3>
        </Card>

        <Card style={{padding: '16px', margin: 8}}>
            <h2>Local state</h2>

            <div>
                <Button onClick={handleLocalAdd}>Add</Button>
                <Button onClick={handleLocalSubtract}>Subtract</Button>
            </div>

            <h3>
                Local counter: {counter}
            </h3>
        </Card>

    </div>
};

export default ReduxTest;
