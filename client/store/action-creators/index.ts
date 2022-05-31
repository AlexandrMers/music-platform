import * as PlayerActionCreators from "./player";
import * as TracksActionCreators from "./track";

const ActionCreators = {
  ...PlayerActionCreators,
  ...TracksActionCreators,
};

export default ActionCreators;
