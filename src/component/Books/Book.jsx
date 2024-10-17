import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Grid2 as Grid } from "@mui/material";
import Rating from "../Rating";
// import {  } from "../../services/BookServices";
import { fetchBooks, singleBook } from "../../features/BookSlice";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Book({ book }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookInfo = async (book) => {
    dispatch(fetchBooks());
    dispatch(singleBook(book._id));

    navigate(`/book/${book._id}`);
  };

  return (
    <Box
      sx={{
        p: 2,
        // border: "1px solid black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Link to={`/book/${book._id}`}> */}
      <Card
        sx={{
          width: "235px",
          height: "280px",
          border: "1px solid #E2E2E2",
          background: "#ffffff 0% 0% no-repeat padding-box",
          borderRadius: "3px",
          // border: "5px solid red",
        }}
        onClick={() => bookInfo(book)}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              //   border: "1px solid black",
              //   marginTop: "8px",
              padding: "8px",
              alignItems: "center",
              background: " #F5F5F5 0% 0% no-repeat padding-box",
              borderRadius: " 2px 2px 0px 0px",
            }}
          >
            <img
              src={book.bookImage}
              alt="logo"
              width="110px"
              height="135px"
              style={{ boxShadow: "1px 3px 3px 3px" }}
            />
          </Box>

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              marginBottom="1px"
            >
              {book.bookName}
            </Typography>
            <Typography
              variant="h7"
              sx={{
                color: "text.secondary",
                fontWeight: 550,
              }}
            >
              by {book.author}
            </Typography>

            <Rating />
            <Typography
              variant="h7"
              sx={{
                // color: "text.secondary",
                fontWeight: 550,
                display: "flex",
                gap: "8px",
                alignItems: "center",
                marginTop: "10px",
                color: "black",
              }}
            >
              Rs. {book.price}
              <span
                style={{
                  textDecoration: "line-through",
                  fontSize: "12px",
                  color: "grey",
                }}
              >
                Rs 2000
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </Link> */}
    </Box>
  );
}
{
  /* <Grid container spacing={3}>
  <Grid item xs>
    <Item>
      <Card
        sx={{
          width: "235px",
          height: "275px",
          border: "1px solid #E2E2E2",
          background: "#ffffff 0% 0% no-repeat padding-box",
          borderRadius: "3px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="135"
            width="105"
            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
            alt="Book"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Item>
  </Grid>
</Grid>; */
}
