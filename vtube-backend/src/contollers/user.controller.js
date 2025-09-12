import User from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";

const registerUser = asyncHandler(async (req, res) => {
  // get user details
  // validate
  // check if user alredy exists
  // check avatar and coverImage
  // validate avatar
  // handle images
  // create user
  // remove pass & refresh token
  // send response

  const { userName, email, fullName, password } = req.body();

  if (
    [userName, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const existedUser = User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser)
    throw new ApiError(409, "User with email or username already exists!");

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) throw new ApiError("Avatar is required!");

  const avatar = uploadOnCloudinary(avatarLocalPath);
  const coverImage = uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) throw new ApiError(500, "Internal Server Error");
});

export { registerUser };
