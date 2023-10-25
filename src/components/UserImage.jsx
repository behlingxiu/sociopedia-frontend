import { Box } from "@mui/material";
const api = "https://sociopedia-server-pday.onrender.com";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${api}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
