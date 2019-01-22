import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  headerFontFamily: ['Patrick Hand SC', 'sans-serif'],
  bodyFontFamily: ['Neucha', 'serif'],
  overrideStyles: ({adjustFontSizeTo, rhythm}, options, styles) => ({
    h1: {
      fontSize: '4rem',
      marginTop: '0.67em',
      marginRight: '0px',
      marginBottom: '0.67em',
      marginLeft: '0px',
    },
    h2: {
      fontSize: '3rem',
    },
  }),
});

export default typography;
