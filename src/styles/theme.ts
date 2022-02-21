export const setupTheme = (isDark: boolean) => {
  if (isDark) {
    return {
      ...theme,
      colors: {
        primary: '#00D2DF',
        light: '#fff',
        grayLight: '#C4C4C4',
        dark: '#121212',
        darken: '#151515'
      }
    }
  }

  return {
    ...theme,
    colors: {
      primary: '#00D2DF',
      light: '#eee',
      grayLight: '#151515',
      dark: '#fff',
      darken: '#C4C4C4'
    }
  }
}

export const theme = {
  grid: {
    container: '108rem'
  },
  colors: {
    primary: '#00D2DF',
    light: '#fff',
    grayLight: '#C4C4C4',
    dark: '#121212',
    darken: '#151515'
  },
  gradients: {
    pink: 'linear-gradient(270.06deg, #6518B4 0%, #D24074 101.62%)',
    purple: 'linear-gradient(269.96deg, #10D7E2 0%, #9358F7 100%)',
    dark: 'linear-gradient(#121212, #121212)',
    darken: 'linear-gradient(#151515, #151515)'
  },
  font: {
    family: 'Inter, sans-serif',
    sizes: {
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      huge: '6.4rem'
    }
  },
  spacings: {
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem'
  }
}
