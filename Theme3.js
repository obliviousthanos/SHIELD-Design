const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: colors.blue[500],
      light: colors.blue[50],
      dark: colors.blue[600],
      contrastText: colors.white[50],
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[600],
      disabled: colors.grey[400],
    },
    action: {
      disabledBackground: colors.grey[200],
    },
    background: {
      default: '#ffffff',
      paper: {
        elevation0: '#ffffff',
        elevation1: colors.grey[50],
        elevation2: colors.grey[100],
      },
    },
    error: {
      main: colors.red[500],
      light: colors.red[50],
      dark: colors.red[700],
      contrastText: colors.white[50],
    },
    warning: {
      main: colors.orange[500],
      light: colors.orange[50],
      dark: colors.orange[600],
      contrastText: colors.white[50],
    },
    success: {
      main: colors.green[600],
      light: colors.green[50],
      dark: colors.green[700],
      contrastText: colors.white[50],
    },
    common: {
      black: colors.black[900],
      white: colors.white[50],
    },
    divider: {
      primary: colors.grey[300],
      secondary: colors.grey[200],
      disabled: colors.grey[200],
      hover: colors.grey[500],
    },
  },
  components: {
    input: {
      filled: {
        hoverFill: 'rgba(0, 0, 0, 0.09)',
        enabledFill: 'rgba(0, 0, 0, 0.06)',
      },
      outlined: {
        hoverBorder: colors.black[900],
        enabledBorder: 'rgba(0, 0, 0, 0.19)',
      },
      standard: {
        hoverBorder: colors.black[900],
        enabledBorder: 'rgba(0, 0, 0, 0.42)',
      },
    },
    alert: {
      info: {
        background: colors.blue[50],
        color: colors.blue[500],
      },
      success: {
        background: colors.green[50],
        color: colors.green[600],
      },
      warning: {
        background: colors.orange[50],
        color: colors.orange[500],
      },
      error: {
        background: colors.red[50],
        color: colors.red[500],
      },
    },
    snackbar: {
      fill: colors.grey[900],
    },
    chips: {
      defaultFocusFill: 'rgba(0, 0, 0, 0.2)',
      defaultHoverFill: 'rgba(0, 0, 0, 0.12)',
      defaultCloseFill: colors.black[900],
      defaultEnabledBorder: colors.grey[300],
    },
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[200],
      light: colors.blue[50],
      dark: colors.blue[300],
      contrastText: colors.white[50],
    },
    text: {
      primary: colors.grey[50],
      secondary: colors.grey[400],
      disabled: colors.grey[600],
    },
    action: {
      disabledBackground: colors.grey[800],
    },
    background: {
      default: colors.black[900],
      paper: {
        elevation0: colors.grey[900],
        elevation1: colors.grey[800],
        elevation2: colors.grey[700],
      },
    },
    error: {
      main: colors.red[400],
      light: colors.red[900],
      dark: colors.red[700],
      contrastText: colors.white[50],
    },
    warning: {
      main: colors.orange[400],
      light: colors.orange[900],
      dark: colors.orange[600],
      contrastText: colors.white[50],
    },
    success: {
      main: colors.green[400],
      light: colors.green[900],
      dark: colors.green[600],
      contrastText: colors.white[50],
    },
    common: {
      black: colors.black[900],
      white: colors.white[50],
    },
    divider: {
      primary: colors.grey[700],
      secondary: colors.grey[800],
      disabled: colors.grey[700],
      hover: colors.grey[400],
    },
  },
  components: {
    input: {
      filled: {
        hoverFill: 'rgba(255, 255, 255, 0.12)',
        enabledFill: 'rgba(255, 255, 255, 0.09)',
      },
      outlined: {
        hoverBorder: colors.white[50],
        enabledBorder: 'rgba(255, 255, 255, 0.23)',
      },
      standard: {
        hoverBorder: colors.white[50],
        enabledBorder: 'rgba(255, 255, 255, 0.42)',
      },
    },
    alert: {
      info: {
        background: colors.blue[900],
        color: colors.blue[400],
      },
      success: {
        background: colors.green[900],
        color: colors.green[400],
      },
      warning: {
        background: colors.orange[900],
        color: colors.orange[400],
      },
      error: {
        background: colors.red[900],
        color: colors.red[400],
      },
    },
    snackbar: {
      fill: colors.grey[50],
    },
    chips: {
      defaultFocusFill: 'rgba(255, 255, 255, 0.2)',
      defaultHoverFill: 'rgba(255, 255, 255, 0.12)',
      defaultCloseFill: colors.white[50],
      defaultEnabledBorder: colors.grey[600],
    },
  },
};

export { lightTheme, darkTheme };
