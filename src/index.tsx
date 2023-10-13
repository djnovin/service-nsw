/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/styles.scss';
import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
