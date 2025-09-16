import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiSuccess } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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

  const { userName, email, fullName, password } = req.body;

  console.log(req.body);

  if (
    [userName, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser)
    throw new ApiError(409, "User with email or username already exists!");

  console.log(req.files);

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  console.log(avatarLocalPath);
  console.log(coverImageLocalPath);

  if (!avatarLocalPath) throw new ApiError("Avatar is required!");

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    userName: userName.toLowerCase(),
    email,
    fullName,
    avatar: avatar.url,
    password,
    coverImage: coverImage?.url || "",
  });

  const createdUser = await User.findOne(user._id).select(
    "-password -refershToken"
  );

  if (!createdUser)
    throw new ApiError(500, "Something went wrong while registering user!");

  return res
    .status(201)
    .json(new ApiSuccess(200, createdUser, "User registered successfully!"));
});

export { registerUser };
