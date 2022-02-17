import { Button, Card } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import ShowMoreText from "react-show-more-text";

const MovieCard=({movie})=>{
    return(
        <div className="MovieCard">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterURL} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <ShowMoreText   lines={4}  more="More" less="Less">
                            {movie.description}
                        </ShowMoreText>                        
                    </Card.Text>
                    <Rating name="read-only" value={movie.rating} readOnly />
                    <br/>
                    <Button variant="primary">Edit Movie</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard