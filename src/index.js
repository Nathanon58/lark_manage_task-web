import './style'
import App from './App';
import { StoreProvider } from './helpers/store-provider';

const Wrap = () => (
    <StoreProvider>
        <App />
    </StoreProvider>
);

export default Wrap
