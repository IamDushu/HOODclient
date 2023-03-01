import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import "./home.css"

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 10%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="1rem"
        justifyContent="space-between"
      >
        {/* <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box> */}
        <Box
          flexBasis={isNonMobileScreens ? "70%" : undefined}
          mt={isNonMobileScreens ? undefined : "1rem"}
        >
          <div className="topgun">
            <div className="left"><p className="textt">Friends' Posts</p></div>
            <div className="right"><p className="textt">Best Posts</p><hr className="line"></hr></div>
          </div>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="30%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
