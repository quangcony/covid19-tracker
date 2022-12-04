import { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <IconButton
      sx={{
        display: visible ? 'inline-flex' : 'none',
        position: 'fixed',
        right: 20,
        bottom: 20,
        border: '1px solid #FC1503',
        color: '#FC1503',
      }}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <KeyboardArrowUpOutlinedIcon />
    </IconButton>
  )
}

export default BackToTop
