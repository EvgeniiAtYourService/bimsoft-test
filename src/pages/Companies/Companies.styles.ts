import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    maxWidth: 1300,
    minWidth: 800,
    margin: '0 auto',
    position: 'relative',
  },
  header: {
    height: 56,
    backgroundColor: '#E8E8E8',
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 30px',
    '& svg': {
      color: 'grey',
      cursor: 'pointer',
    },
  },
  sidebar: {
    display: 'none',
  },
  body: {
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  container: {
    padding: 24,
  },
  heading: {
    width: 230,
    marginBottom: 8,
  },
  sidePanel: {
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    width: '200px',
    left: -220,
    top: 10,
    minHeight: 480,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    zIndex: '30000',
    '& a': {
      marginBottom: 15,
      textDecoration: 'none',
      color: 'black',
    },
    '& p': {
      marginBottom: 15,
    },
  },
  '@media (max-width: 1760px)': {
    sidePanel: {
      top: 66,
      left: 10,
    },
  },
  signInBlock: {
    padding: 10,
    border: '1px solid grey',
    borderRadius: '5px',
    '& button': {
      padding: 4,
      borderRadius: '5px',
      border: '1px solid grey',
      cursor: 'pointer',
      '&:active': {
        position: 'relative',
        bottom: 1,
      },
    },
    '& input': {
      width: 150,
      height: 30,
      padding: 5,
      marginBottom: 15,
      borderRadius: 5,
      border: 'none',
      outline: 'none',
    },
    '& label': {
      display: 'block',
      marginBottom: 5,
    },
  },
  inputDisabled: {
    opacity: '0.5',
    cursor: 'default',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  disabledCompanies: {
    cursor: 'default',
    opacity: '0.4',
  },
  logo: {
    borderRadius: 10,
    margin: '15px 0',
  },
  arrowIcon: {
    zIndex: '20000',
  },
  arrowIconActive: {
    transform: 'rotate(180deg)',
  },
  notes: {
    width: 383,
    marginBottom: 88,
  },
  tableRow: {
    display: 'flex',
  },
  table: {
    backgroundColor: 'white',
    width: '90%',
    minWidth: 650,
    height: 587,
    position: 'relative',
    //scroll
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      height: 8,
      width: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: 'white',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#c4c4c4',
      borderRadius: 20,
    },
    //--scroll
    '& table': {
      width: '100%',
      borderCollapse: 'collapse',
      '& td, th': {
        border: '1px solid black',
        padding: 7,
        textAlign: 'center',
      },
      '& thead': {
        position: 'sticky',
        top: -1,
        backgroundColor: '#e8e8e8',
      },
      '& tr th': {
        width: '125px',
      },
      '& td': {
        cursor: 'pointer',
      },
    },
  },
})

export default styles
