import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CoronavirusIcon from '@mui/icons-material/Coronavirus'

import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <Stack
      direction={{xs: 'column', md: 'row'}}
      alignItems="center"
      p={2}
      zIndex={999}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <Typography
          variant="h5"
          sx={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          C
          <span style={{ color: '#FC1503' }}>
            <CoronavirusIcon />
          </span>
          vid Tracker
        </Typography>
      </Link>
      <Searchbar />
    </Stack>
  )
}

export default Navbar
