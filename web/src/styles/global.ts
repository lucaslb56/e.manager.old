/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${({ theme }) => theme['indigo-500']};
    }
    
    body{
        background-color: ${({ theme }) => theme['white']};
        color: ${({ theme }) => theme['black']};
        --webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button{
        font: 400 1rem 'Inter', sans-serif;
        
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }

    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme['indigo-300']};
      border-radius: 999px;
    }
`;
