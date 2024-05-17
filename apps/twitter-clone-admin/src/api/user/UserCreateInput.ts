import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
