import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton'
import Github from '@mui/icons-material/GitHub'
// import Typography from '@mui/material/Typography'


const Bar = () => {
  return <AppBar position='static'>
    {/* <Typography>Transform Go's Enum to Typescript</Typography> */}
    <Toolbar>
      <IconButton onClick={() => window.open('https://github.com/anc95/golang-enum-to-ts', 'blank')} edge="end" color="inherit">
        <Github />
      </IconButton>
    </Toolbar>
  </AppBar>
}

export default Bar