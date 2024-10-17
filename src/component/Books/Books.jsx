import { Box, Grid2 as Grid } from "@mui/material";
import HomeHeader from "../HomeHeader";
import Book from "./Book";
import { useEffect, useState } from "react";
import { fetchBooks, fetchBookSlice } from "../../features/BookSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Books() {
  const [book, setBook] = useState([]);
  const dispatch = useDispatch();
  const { books } = useSelector(fetchBookSlice);

  useEffect(() => {
    async function getBooks() {
      const book = await dispatch(fetchBooks());

      //  setBook(book);
    }
    getBooks();
  }, []);

  return (
    <>
      <HomeHeader />
      <Box>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {books.map((curr) => (
            <Grid item={curr._id.toString()} key={curr._id}>
              <Book book={curr} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
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
