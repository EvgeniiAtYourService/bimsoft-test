import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    maxWidth: 1300,
    margin: '0 auto',
    border: '1px solid gray',
  },
  header: {
    height: 56,
    border: '1px solid gray',
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
    height: '1fr',
    backgroundColor: 'blue',
  },
  container: {
    padding: 24,
    backgroundColor: 'green',
  },
  heading: {
    width: 220,
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
    outline: 'none',
    padding: '0 15px',
    border: 'none',
    marginBottom: 24,
  },
  tableRow: {
    display: 'flex',
  },
  table: {
    backgroundColor: 'purple',
    width: '90%',
    height: 400,
    position: 'relative',
  },
  tableButtons: {
    backgroundColor: 'azure',
    width: '10%',
    minWidth: 78,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& $tableButton': {
      width: 48,
      height: 48,
      backgroundColor: 'azure',
      marginBottom: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  tableButton: {},
})

export default styles
