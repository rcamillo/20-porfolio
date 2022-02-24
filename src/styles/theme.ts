export const setupTheme = (isDark: boolean) => {
  if (isDark) {
    return {
      ...theme,
      colors: {
        primary: '#00D2DF',
        text: '#fff',
        grayLight: '#C4C4C4',
        'background-1': '#121212',
        'background-2': '#151515'
      },
      gradients: {
        ...theme.gradients,
        'background-1': 'linear-gradient(#121212, #121212)',
        'background-2': 'linear-gradient(#151515, #151515)'
      }
    }
  }

  return {
    ...theme,
    colors: {
      primary: '#6518B4',
      text: '#151515',
      grayLight: '#151515',
      'background-1': '#fff',
      'background-2': '#c4c4c4'
    },
    gradients: {
      ...theme.gradients,
      'background-1': 'linear-gradient(#fff, #fff)',
      'background-2': 'linear-gradient(#c4c4c4, #c4c4c4)'
    }
  }
}

export const theme = {
  grid: {
    container: '108rem'
  },
  colors: {
    primary: '#00D2DF',
    text: '#fff',
    grayLight: '#C4C4C4',
    'background-1': '#121212',
    'background-2': '#151515'
  },
  gradients: {
    pink: 'linear-gradient(270.06deg, #6518B4 0%, #D24074 101.62%)',
    purple: 'linear-gradient(269.96deg, #10D7E2 0%, #9358F7 100%)',
    'background-1': 'linear-gradient(#121212, #121212)',
    'background-2': 'linear-gradient(#151515, #151515)'
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
