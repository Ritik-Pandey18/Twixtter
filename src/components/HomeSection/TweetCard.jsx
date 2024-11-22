import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Repeat as RepeatIcon,
  MoreHoriz as MoreHorizIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
  BarChart as BarChartIcon,
  FileUpload as FileUploadIcon,
} from '@mui/icons-material';

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handlers
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDeleteTweet = () => {
    console.log("Delete tweet");
    handleMenuClose();
  };
  const handleEditTweet = () => {
    console.log("Edit tweet");
    handleMenuClose();
  };
  const handleOpenReplyModel = () => console.log("Open reply model");
  const handleCreateRetweet = () => console.log("Create retweet");
  const handleLikeTweet = () => console.log("Like tweet");

  return (
    <div className="flex space-x-4 p-4 border-b border-gray-200">
      {/* Avatar Section */}
      <Avatar
        onClick={() => navigate(`/profile/${6}`)}
        className="cursor-pointer"
        alt='username'
        src="https://tse4.mm.bing.net/th?id=OIP.sB1ZQFsbstJaIKeBwaxyLwHaIh&pid=Api&P=0&h=180"
      />

      {/* Content Section */}
      <div className="flex-1">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Messi</span>
            <span className="text-gray-600">@lionel.messi</span>
            <img
              className="w-6 h-6 ml-3"
              src="https://tse3.mm.bing.net/th?id=OIP.ZNuDR2bPovYzdzWJRxFv3gHaNK&pid=Api&P=0&h=180"
              alt="Verified"
            />
          </div>
          <Button
            aria-controls={open ? 'menu' : undefined}

            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
            <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
          </Menu>
        </div>

        {/* Tweet Content */}
        <div className="mt-2">
          <div onClick={()=>navigate(`/tweet/${3}`)} className="cursor-pointer">
          <p className="mb-2 p-0">Full-stack Twitter clone</p>
          <img
            className="w-full max-w-lg mt-3 rounded-md border border-gray-300"
            src="https://tse2.mm.bing.net/th?id=OIP.anUMV7FxDkhy_XgrgIWX5QHaNK&pid=Api&P=0&h=180"
            alt="Tweet Content"
          />
          </div>
          
        </div>

        {/* Action Section */}
        <div className="mt-4 flex justify-between items-center text-gray-600">
          {/* Reply */}
          <div className="flex items-center space-x-1">
            <ChatBubbleOutlineIcon
              className="cursor-pointer"
              onClick={handleOpenReplyModel}
            />
            <p>43</p>
          </div>

          {/* Retweet */}
          <div className="flex items-center space-x-1">
            <RepeatIcon
              className="cursor-pointer"
              onClick={handleCreateRetweet}
            />
            <p>54</p>
          </div>

          {/* Like */}
          <div className="flex items-center space-x-1">
            {true ? (
              <FavoriteIcon
                className="cursor-pointer text-pink-600"
                onClick={handleLikeTweet}
              />
            ) : (
              <FavoriteOutlinedIcon
                className="cursor-pointer"
                onClick={handleLikeTweet}
              />
            )}
            <p>54</p>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-1">
            <BarChartIcon
              className="cursor-pointer"
              onClick={handleOpenReplyModel}
            />
            <p>430</p>
          </div>

          {/* Share */}
          <FileUploadIcon
            className="cursor-pointer"
            onClick={handleOpenReplyModel}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
