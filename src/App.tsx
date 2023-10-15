import { Component, For } from 'solid-js';
import { componentMapper } from './helpers/componentMapper';
import { FetchDataHelper } from './helpers/fetchData';
import { ComponentData } from './types';
import { data } from './data';

const App: Component = () => {
    const pageData = new FetchDataHelper<ComponentData>().fetchData(data);

    return (
        <main>
            <For each={pageData}>
                {(item, index) => {
                    const Component = componentMapper[item?._type];
                    return <Component key={index()} {...item} />;
                }}
            </For>
        </main>
    );
};

export default App;
