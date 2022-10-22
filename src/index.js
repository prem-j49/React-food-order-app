import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContexProvider } from './store/Auth-contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContexProvider><App /></AuthContexProvider>);
