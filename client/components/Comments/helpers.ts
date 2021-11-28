import { IComment } from "../../types/Comment";

export function checkIsNotLastElementInList(
  index: number,
  comments: IComment[]
) {
  return index + 1 !== comments.length;
}
