import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    maxWidth: 1300,
    minWidth: 800,
    margin: '0 auto',
    //     display: 'grid',
    // gridTemplateRows: '5vh 95vh',
    //     gridTemplateAreas: `'header''body'`,
    position: 'relative',
  },
  header: {
    height: 56,
    // gridArea: 'header',
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
  arrowIcon: {
    zIndex: '20000',
  },
  arrowIconActive: {
    transform: 'rotate(180deg)',
  },
  sidebar: {
    display: 'none',
  },
  sidePanel: {
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    width: '200px',
    left: -220,
    top: 10,
    minHeight: 450,
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
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    borderRadius: 10,
    margin: '15px 0',
  },
  body: {
    // gridArea: 'body',
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  container: {
    padding: 24,
  },
  heading: {
    // width: 220,
    width: 230,
    marginBottom: 8,
  },
  notes: {
    width: 383,
    marginBottom: 24,
  },
  searchWrapper: {
    width: 450,
    position: 'relative',
  },
  searchButton: {
    position: 'absolute',
    height: 40,
    width: 100,
    right: -120,
    padding: '10px 0',
    cursor: 'pointer',
    borderRadius: 5,
    border: 'none',
    transition: '0.5s all',
    backgroundColor: '#E0E0E0',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#D0D0D0',
    },
  },
  search: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    border: '1px solid black',
    outline: 'none',
    padding: '0 15px',
    marginBottom: 24,
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
        // borderBottom: 'none',
        width: '125px',
      },
      '& td': {
        cursor: 'pointer',
      },
    },
  },
  selectedUserRow: {
    '& td:nth-child(n)': {
      border: '3px solid black',
    },
  },
  tableButtons: {
    backgroundColor: '#F5F5F5',
    width: '10%',
    minWidth: 78,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& $tableButton': {
      width: 48,
      height: 48,
      marginBottom: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  disabledButton: {
    opacity: '0.1',
  },
  tableButton: {},
  modal: {
    '& label': {
      display: 'block',
      width: '300px',
      margin: '0 auto 15px',
      fontWeight: 500,
    },
    '& input': {
      display: 'block',
      margin: '0 auto 15px',
      height: 40,
      padding: '10px 14px',
      borderRadius: 5,
      width: 300,
      border: '0.5px solid grey',
      outline: 'none',
    },
    '& h3': {
      marginBottom: 10,
      textAlign: 'center',
    },
    '& button': {
      margin: '30px auto 10px',
      display: 'block',
      width: 170,
      padding: '10px 0',
      cursor: 'pointer',
      borderRadius: 5,
      border: 'none',
      transition: '0.5s all',
      '&:hover': {
        backgroundColor: '#C8C8C8',
      },
    },
  },
})

export default styles
