import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton'
import Github from '@mui/icons-material/GitHub'
import Typography from '@mui/material/Typography'
import { ColorModeButton } from '../../context/colorMode'

const Bar = () => {
  return <AppBar position='static'>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Transform GO's Enum To Typescript
      </Typography>
      <IconButton 
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }} onClick={() => window.open('https://github.com/anc95/golang-enum-to-ts', 'blank')}
      >
        <Github />
      </IconButton>
      <ColorModeButton />
    </Toolbar>
  </AppBar>
}

export default Bar