// @ts-nocheck

import Header from "./components/layout/Header";
import themes from "./components/layout/themes";
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {useState, createContext} from 'react-server-dom-webpack/server.edge'



export const metadata = {
  title: "gogrowfund.com",
  description: " cdeveloped by Syed Rashid Geelani, Saurabh Yamgar and Saurabh Pandey",
};


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutWrapper onClick={changeTheme}>
        <Header />
        {children}
      </LayoutWrapper>
    </ThemeProvider>   
  );
}


const LayoutWrapper = styled.div`
  backgrounf-color: ${(props)=> props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props)=> props.theme.color};
`
const changeTheme = ()=>{
  setTheme(theme == "light" ? "dark" : "light");
}