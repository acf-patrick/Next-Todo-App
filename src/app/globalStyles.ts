import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background: #0b2447;
  padding: 1rem 2rem;
}

body * {
  color: white;
}

a {
  text-decoration: none;
}

.root {
  max-width: 640px;
  margin: auto;
}
`;

export default GlobalStyles;