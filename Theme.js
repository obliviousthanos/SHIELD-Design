const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: colors.blue[500],
      dark: colors.blue[600],
      light: colors.blue[400],
      darker: colors.blue[700],
      contrastText: colors.white[50],
      states: {
        hover: 'rgba(0, 102, 255, 0.04)',
        selected: 'rgba(0, 102, 255, 0.08)',
        focus: 'rgba(0, 102, 255, 0.12)',
        focusVisible: 'rgba(0, 102, 255, 0.3)',
        outlinedBorder: 'rgba(0, 102, 255, 0.5)'
      }
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      states: {
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.08)',
        focus: 'rgba(0, 0, 0, 0.12)',
        focusVisible: 'rgba(0, 0, 0, 0.3)'
      }
    },
    action: {
      active: 'rgba(0, 0, 0, 0.56)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      focus: 'rgba(0, 0, 0, 0.04)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    },
    error: {
      main: colors.red[500],
      dark: colors.red[700],
      light: colors.red[50],
      contrast: colors.white[50],
      states: {
        hover: 'rgba(221, 43, 14, 0.04)',
        selected: colors.red[300],
        focusVisible: 'rgba(221, 43, 14, 0.3)',
        outlinedBorder: 'rgba(221, 43, 14, 0.5)'
      }
    },
    warning: {
      main: colors.orange[600],
      dark: colors.orange[700],
      light: colors.orange[400],
      contrastText: colors.white[50],
      states: {
        focus: 'rgba(251, 133, 0, 0.12)',
        selected: 'rgba(251, 133, 0, 0.08)',
        hover: 'rgba(251, 133, 0, 0.04)',
        focusVisible: 'rgba(251, 133, 0, 0.3)',
        outlinedBorder: 'rgba(251, 133, 0, 0.5)'
      }
    },
    info: {
      main: colors.grey[200],
      dark: colors.grey[300],
      light: colors.grey[100],
      contrast: 'rgba(0, 0, 0, 0.87)'
    },
    success: {
      main: colors.green[500],
      dark: colors.green[700],
      light: colors.green[50],
      contrast: colors.white[50],
      states: {
        hover: 'rgba(28, 215, 96, 0.04)',
        selected: 'rgba(28, 215, 96, 0.08)',
        focus: 'rgba(28, 215, 96, 0.12)',
        outlinedBorder: 'rgba(28, 215, 96, 0.5)',
        focusVisible: 'rgba(28, 215, 96, 0.3)'
      }
    },
    background: {
      default: colors.white[50],
      paper: {
        elevation0: colors.white[50],
        elevation1: colors.grey[50],
        elevation2: colors.grey[100]
      }
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    common: {
      black: colors.black[900],
      white: colors.white[50]
    },
    components: {
      input: {
        filled: {
          hoverFill: 'rgba(0, 0, 0, 0.09)',
          enabledFill: 'rgba(0, 0, 0, 0.06)'
        },
        outlined: {
          hoverBorder: colors.black[900],
          enabledBorder: 'rgba(0, 0, 0, 0.19)'
        },
        standard: {
          hoverBorder: colors.black[900],
          enabledBorder: 'rgba(0, 0, 0, 0.42)'
        }
      },
      alert: {
        info: {
          background: colors.blue[50],
          color: colors.blue[500]
        },
        success: {
          background: colors.green[50],
          color: colors.green[600]
        },
        warning: {
          background: colors.orange[50],
          color: colors.orange[500]
        },
        error: {
          background: colors.red[50],
          color: colors.red[500]
        }
      },
      snackbar: {
        fill: colors.grey[900]
      },
      chips: {
        defaultFocusFill: 'rgba(0, 0, 0, 0.2)',
        defaultHoverFill: 'rgba(0, 0, 0, 0.12)',
        defaultCloseFill: colors.black[900],
        defaultEnabledBorder: colors.grey[400]
      }
    }
  }
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[200],
      dark: colors.blue[300],
      light: colors.blue[50],
      darker: colors.blue[400],
      contrastText: 'rgba(0, 0, 0, 0.87)',
      states: {
        hover: 'rgba(137, 186, 255, 0.08)',
        selected: 'rgba(137, 186, 255, 0.16)',
        focus: 'rgba(137, 186, 255, 0.12)',
        focusVisible: 'rgba(137, 186, 255, 0.3)',
        outlinedBorder: 'rgba(137, 186, 255, 0.5)'
      }
    },
    text: {
      primary: colors.white[50],
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      states: {
        hover: 'rgba(255, 255, 255, 0.08)',
        selected: 'rgba(255, 255, 255, 0.16)',
        focus: 'rgba(255, 255, 255, 0.12)',
        focusVisible: 'rgba(255, 255, 255, 0.3)'
      }
    },
    action: {
      active: 'rgba(255, 255, 255, 0.56)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      focus: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    },
    error: {
      main: colors.red[400],
      dark: colors.red[600],
      light: colors.red[800],
      contrast: colors.white[50],
      states: {
        hover: 'rgba(236, 89, 65, 0.08)',
        selected: colors.red[200],
        focusVisible: 'rgba(236, 89, 65, 0.3)',
        outlinedBorder: 'rgba(236, 89, 65, 0.5)'
      }
    },
    warning: {
      main: colors.orange[200],
      dark: colors.orange[300],
      light: colors.orange[50],
      contrastText: 'rgba(0, 0, 0, 0.87)',
      states: {
        focus: 'rgba(255, 207, 140, 0.12)',
        selected: 'rgba(255, 207, 140, 0.16)',
        hover: 'rgba(255, 207, 140, 0.08)',
        focusVisible: 'rgba(255, 207, 140, 0.3)',
        outlinedBorder: 'rgba(255, 207, 140, 0.5)'
      }
    },
    info: {
      main: colors.grey[800],
      dark: colors.grey[700],
      light: colors.grey[900],
      contrast: colors.white[50]
    },
    success: {
      main: colors.green[400],
      dark: colors.green[600],
      light: colors.green[800],
      contrast: colors.white[50],
      states: {
        hover: 'rgba(51, 245, 122, 0.04)',
        selected: 'rgba(51, 245, 122, 0.08)',
        focus: 'rgba(51, 245, 122, 0.12)',
        outlinedBorder: 'rgba(51, 245, 122, 0.5)',
        focusVisible: 'rgba(51, 245, 122, 0.3)'
      }
    },
    background: {
      default: '#121212',
      paper: {
        elevation0: '#121212',
        elevation1: colors.grey[900],
        elevation2: colors.grey[800]
      }
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    common: {
      black: colors.black[900],
      white: colors.white[50]
    },
    components: {
      input: {
        filled: {
          hoverFill: 'rgba(255, 255, 255, 0.12)',
          enabledFill: 'rgba(255, 255, 255, 0.09)'
        },
        outlined: {
          hoverBorder: colors.white[50],
          enabledBorder: 'rgba(255, 255, 255, 0.23)'
        },
        standard: {
          hoverBorder: colors.white[50],
          enabledBorder: 'rgba(255, 255, 255, 0.42)'
        }
      },
      alert: {
        info: {
          background: colors.blue[900],
          color: colors.blue[400]
        },
        success: {
          background: colors.green[900],
          color: colors.green[400]
        },
        warning: {
          background: colors.orange[900],
          color: colors.orange[400]
        },
        error: {
          background: colors.red[900],
          color: colors.red[400]
        }
      },
      snackbar: {
        fill: colors.grey[50]
      },
      chips: {
        defaultFocusFill: 'rgba(255, 255, 255, 0.2)',
        defaultHoverFill: 'rgba(255, 255, 255, 0.12)',
        defaultCloseFill: colors.white[50],
        defaultEnabledBorder: colors.grey[600]
      }
    }
  }
};

export { lightTheme, darkTheme };