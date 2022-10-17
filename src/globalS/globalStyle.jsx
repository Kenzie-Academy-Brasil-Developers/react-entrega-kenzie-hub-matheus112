import {createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`

*{
    font-family: 'Inter', sans-serif;
}
    :root{
        
        --color-input:#343B41;
        --color-grey-claro:#F5F5F5;
        --color-white: white;
        --color-login-container:#212529;
        --color-button-login:#FF577F;
        --color-button-cadastrar: #868E96;
        --color-font-grey:#868E96;
        --color-button-text: #F8F9FA;
        --color-header:#121214;
        --color-grey-text:#868E96;
        --button-hover:#59323F;
        

    
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
  body{
    min-height: 100vh;
  }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    cursor:pointer;
}
.buttonOf{
    background-color: var(--color-grey-claro);
}
ul::-webkit-scrollbar-thumb{
    background-color: var(--color-lixeira);
    } 
    ul::-webkit-scrollbar{
        width: 10px;
    } 
}
/* main{
    width: 100vw;
    height: 100vh;
} */
`

export default GlobalStyle;
