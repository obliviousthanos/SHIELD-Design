const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      light: colors.blue[300],
      main: colors.blue[500],
      dark: colors.blue[700],
      contrastText: colors.white[50],
    },
    secondary: {
      light: colors.purple[300],
      main: colors.purple[500],
      dark: colors.purple[700],
      contrastText: colors.white[50],
    },
    error: {
      light: colors.red[300],
      main: colors.red[500],
      dark: colors.red[700],
      contrastText: colors.white[50],
    },
    warning: {
      light: colors.orange[300],
      main: colors.orange[500],
      dark: colors.orange[700],
      contrastText: colors.black[900],
    },
    info: {
      light: colors.grey[300],
      main: colors.grey[500],
      dark: colors.grey[700],
      contrastText: colors.black[900],
    },
    success: {
      light: colors.green[300],
      main: colors.green[500],
      dark: colors.green[700],
      contrastText: colors.white[50],
    },
    background: {
      default: colors.grey[50],
      paper: colors.white[50],
    },
    text: {
      primary: colors.black[900],
      secondary: colors.grey[600],
      disabled: colors.grey[400],
    },
    divider: colors.grey[300],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: colors.blue[100],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          backgroundColor: colors.white[50],
        },
        elevation1: {
          backgroundColor: colors.grey[50],
        },
      },
    },
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      light: colors.blue[200],
      main: colors.blue[400],
      dark: colors.blue[600],
      contrastText: colors.black[900],
    },
    secondary: {
      light: colors.purple[200],
      main: colors.purple[400],
      dark: colors.purple[600],
      contrastText: colors.black[900],
    },
    error: {
      light: colors.red[200],
      main: colors.red[400],
      dark: colors.red[600],
      contrastText: colors.white[50],
    },
    warning: {
      light: colors.orange[200],
      main: colors.orange[400],
      dark: colors.orange[600],
      contrastText: colors.black[900],
    },
    info: {
      light: colors.grey[700],
      main: colors.grey[800],
      dark: colors.grey[900],
      contrastText: colors.white[50],
    },
    success: {
      light: colors.green[200],
      main: colors.green[400],
      dark: colors.green[600],
      contrastText: colors.white[50],
    },
    background: {
      default: colors.grey[900],
      paper: colors.grey[800],
    },
    text: {
      primary: colors.white[50],
      secondary: colors.grey[300],
      disabled: colors.grey[600],
    },
    divider: colors.grey[700],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: colors.blue[800],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          backgroundColor: colors.grey[900],
        },
        elevation1: {
          backgroundColor: colors.grey[800],
        },
      },
    },
  },
};
