import { IPost } from "../../interfaces/Post.interface";
import { useDoc } from "./useDoc";

export const usePosts = () => {
  return useDoc<IPost[] | undefined>("posts", "posts_0", undefined);
};
