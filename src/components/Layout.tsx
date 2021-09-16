import React, {useContext} from 'react';
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

const Layout = ({
  startingTheme,
  children
}:{
  startingTheme: string,
  children: any
}) => {
  return(
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

const LayoutNoThemeProvider = ({
  children
}:{
  children: any
}) => {

  const theme = useContext(ThemeContext).theme;

  return (
      <div
        className={
          theme === "light" ?
            "container-fluid light" :
            "container-fluid dark"
        }
      >
        {children}
      </div>
  );
};

export default Layout;
