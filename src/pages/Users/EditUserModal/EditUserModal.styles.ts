import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  wrapper: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '10000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    pointerEvents: 'none',
    transition: '0.5s',
  },
  active: {
    opacity: '1',
    pointerEvents: 'all',
  },
  content: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    width: '400px',
    transform: 'scale(0.5)',
    transition: '0.4s all',
  },
  contentActive: {
    transform: 'scale(1)',
  },
})

export default styles
