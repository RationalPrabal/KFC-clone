import { Box, Grid, Text } from "@chakra-ui/react";
import Cat_card from "./category-card";
import React from "react";
const Categories = () => {
  const arr = [
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=22.82",
      title: "HOT DEALS",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=22.82",
      title: "CHICKEN BUCKETS",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=22.82",
      title: "HOT LAUNCHES",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=22.82",
      title: "BOX MEALS",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.82",
      title: "BURGERS",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=22.82",
      title: "BIRYANI BUCKETS",
    },
    {
      img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=22.82",
      title: "SNACK",
    },
    {
      img: "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
      title: "View All Menu",
    },
  ];
  const [data, setData] = React.useState(arr);
  return (
    <div>
      <Box ml={{ base: "0", md: "10%" }} width={{ base: "100%", md: "40%" }}>
        <Text
          fontSize={{ base: "22px", md: "44px" }}
          fontWeight={"700"}
          fontFamily="National 2 Condensed"
          mt="20"
        >
          Welcome to KFC!
        </Text>
      </Box>
      <Text
        className="text-left sm:text-center"
        mt={{ base: "20px", md: "100px" }}
        w={{ base: "100%", md: "60%" }}
        // ml={{ base: "3", sm: "11.5%" }}
        fontSize={{ base: "18px", md: "34px" }}
        fontWeight="700"
        lineHeight={"43px"}
        fontFamily="National 2 Condensed"
      >
        BROWSE CATEGORIES
      </Text>
      <div className="w-full sm:w-[80%] sm:ml-[20%] ">
        <Grid
          mt="20px"
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          gap={4}
        >
          {data.map((el, i) => (
            <Cat_card img={el.img} title={el.title} index={i} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export { Categories };
