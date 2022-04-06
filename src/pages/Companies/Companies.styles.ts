import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    maxWidth: 1300,
    minWidth: 800,
    margin: '0 auto',
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
