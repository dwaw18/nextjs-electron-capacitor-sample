import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

const SSRTest: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    if (!props.joke) {
        props = {
            joke: {
                setup: 'No SSR?',
                punchline: 'No SSR!'
            }
        }
    }

    return <div>
        <h1>SSR TEST</h1>
        <Card style={{padding: '8pt'}}>
            <h3>{props.joke.setup}</h3>
            <h2>{props.joke.punchline}</h2>
        </Card>
    </div>
};

export default SSRTest;

const getData: GetServerSideProps = async (context) => {
    const response = await axios.get<Joke>('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data;
    return {
        props: {joke}
    };
}

export const getServerSideProps: GetServerSideProps | undefined = process.env.EXPORTS_FOR_BUILD !== 'SSR' ? undefined : getData;

