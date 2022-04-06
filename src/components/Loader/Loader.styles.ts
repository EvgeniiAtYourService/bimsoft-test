import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  loader: {
    width: 45,
    height: 45,
    borderRadius: '50%',
    background: 'conic-gradient(grey 10%, #fff)',
    mask: 'radial-gradient(farthest-side, #0000 calc(100% - 8px), red 0)',
    animation: '$loader 1s infinite linear',
    // margin: '100px auto 0',
    position: 'absolute',
    left: 'calc(50% - 25px)',
    top: '100px',
  },
  '@keyframes loader': {
    to: {
      transform: 'rotate(-1turn)',
    },
  },
})

export default styles
