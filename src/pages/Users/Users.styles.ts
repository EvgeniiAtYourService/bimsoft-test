import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    maxWidth: 1300,
    minWidth: 600,
    margin: '0 auto',
    //     display: 'grid',
    // gridTemplateRows: '5vh 95vh',
    //     gridTemplateAreas: `'header''body'`,
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
  sidebar: {
    display: 'none',
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
  search: {
    height: 40,
    minWidth: 450,
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
})

export default styles
