import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import component from './component';

ReactDOM.createRoot(document.querySelector("#root")!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <component message="Approved! Congrats!!"/>
        </StyledEngineProvider>
    </React.StrictMode>
    );