import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

import moment from 'moment'

const NewsCard = ({ post }) => {
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <a href={post.link} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height="194"
          image={post.urlToImage}
          alt={post.title}
          sx={{ borderRadius: 3, opacity: 0.8 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontSize: 16 }}
            component="div"
            color="#eeeeee"
          >
            {post.title.slice(0, 50)}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 12 }} color="#a6a6a6">
            {moment(post.pubDate).fromNow()} by{' '}
            <strong>{post.reference}</strong>
          </Typography>
          <Typography variant="body2" color="#a6a6a6">
            {post.content.slice(0, 120)}...
          </Typography>
        </CardContent>
      </a>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ fill: '#a6a6a6' }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ fill: '#a6a6a6' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default NewsCard
