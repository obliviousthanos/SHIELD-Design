const lightTheme = {
    palette: {
      mode: 'light',
      primary: {
        main: colors.blue[500],
        dark: colors.blue[600],
        light: colors.blue[400],
        darker: colors.blue[700],
        contrastText: colors.white[50],
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
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
      },
      warning: {
        main: colors.orange[600],
        dark: colors.orange[700],
        light: colors.orange[400],
        contrastText: colors.white[50],
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
      },
      background: {
        default: colors.white[50],
        paper: colors.white[50],
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
      },
      text: {
        primary: colors.white[50],
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.38)',
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
      },
      warning: {
        main: colors.orange[200],
        dark: colors.orange[300],
        light: colors.orange[50],
        contrastText: 'rgba(0, 0, 0, 0.87)',
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
      },
      background: {
        default: '#121212',
        paper: colors.grey[900],
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