import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageBg from '../images/bg_4.jpg'



const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline: 0;
        -webkit-font-smoothing: antialiased;
    }

    body{
        background: url(${ImageBg}) no-repeat fixed;
        background-size: cover;
    }
`

export default GlobalStyle




// font-family: 'Josefin Sans', sans-serif;
// font-family: 'Poppins', sans-serif;