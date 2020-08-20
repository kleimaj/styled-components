import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

// CSS RESET
// Base Font Size: 16px
export const GlobalStyle = createGlobalStyle`
    // Cross Browser Compatibility
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Menlo', monospace;
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`