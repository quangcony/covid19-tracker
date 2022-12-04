import { Stack, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { categories, newsCategories } from '../utils/constants'

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  setCategoryDisplay,
}) => {
  return (
    <Stack
      flexDirection={{ md: 'column' }}
      p={{ xs: 2, md: 0 }}
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '92vh' },
      }}
    >
      <Box pb={2} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="body2" color="#fff" mb={2}>
          Statistic Data
        </Typography>
        {categories.map((category) => (
          <button
            key={category.name}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && '#FC1503',
              color: 'white',
              width: '100%',
            }}
            onClick={() => {
              setSelectedCategory(category.name)
              setCategoryDisplay(category.display)
            }}
          >
            <span
              style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
            >
              {category.display}
            </span>
          </button>
        ))}
      </Box>
      <Box py={2} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="body2" color="#fff">
          News
        </Typography>
        <Stack px={2} mt={2}>
          {newsCategories.map((category) => (
            <Link
              to={`news/${category.name}`}
              key={category.display}
              className="category-link"
            >
              {category.display}
            </Link>
          ))}
        </Stack>
      </Box>
      <Box pt={2}>
        <Typography variant="body2" color="#fff">
          World maps
        </Typography>
        <Stack px={2} mt={2}>
          <Link to="coronavirus-world-map/" className="category-link">
            Coronavirus
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Sidebar
