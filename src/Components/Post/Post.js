import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";

export default function Post() {
  const [user, setUser] = useState([]);
  // Fetching Data
  const fetchData = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let post = data;
        setUser(post);
        console.log(post);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {user.map((data) => (
        <div className="Post">
          <Card sx={{ width: "50%" }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="User"
                  src="https://res.cloudinary.com/dzhxsxpey/image/upload/v1648840874/Omnicell/IMG_20211104_105731_pfvhlf.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Arata_Pradhan"
              subheader={data.timestamp}
            />
            <CardMedia
              component="img"
              height="100%"
              image={data.Image}
              alt="Post"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <ThumbUpIcon />
                <p>{data.likes}</p>
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

// Fetching Working
// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import "./Post.css";

// export default function Post() {
//   const [user, setUser] = useState([]);
//   // Fetching Data
//   const fetchData = () => {
//     fetch(
//       "https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         // console.log(data);
//         let post = data;
//         setUser(post);
//         console.log(post);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {user.map((data) => (
//         <div>
//           <p>{data.timestamp}</p>
//           <p>{data.likes}</p>
//           <img src={data.Image} alt="post"></img>
//         </div>
//       ))}
//     </div>
//   );
// }

// Without Fetch Layout
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import "./Post.css";

// export default function Post() {
//   return (
//     <div className="Post">
//       <Card sx={{ width: "50%" }}>
//         <CardHeader
//           avatar={
//             <Avatar
//               alt="User"
//               src="https://res.cloudinary.com/dzhxsxpey/image/upload/v1648840874/Omnicell/IMG_20211104_105731_pfvhlf.jpg"
//             />
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Arata_Pradhan"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           component="img"
//           height="100%"
//           image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_3d151734.jpg"
//           alt="Post"
//         />
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <ThumbUpIcon />
//             <p>12</p>
//           </IconButton>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }
