import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HorizontalScale = size => (size/393 * windowWidth);
const VerticalScale = size => (size/852 * windowHeight);

export { windowWidth, windowHeight ,HorizontalScale,VerticalScale};
