import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const hobbies = [
    { label: 'טכנולוגיה', value: 'טכנולוגיה' },
    { label: 'ספורט', value: 'ספורט' },
    { label: 'קריאה', value: 'קריאה' },
    { label: 'מוזיקה', value: 'מוזיקה' },
    { label: 'טיולים', value: 'טיולים' },
    { label: 'בישול', value: 'בישול' },
    { label: 'ציור', value: 'ציור' },
    { label: 'תיקון רכבים', value: 'תיקון רכבים' },
    { label: 'גינון', value: 'גינון' },
    { label: 'סרטים', value: 'סרטים' },
    { label: 'אומנות', value: 'אומנות' },
    { label: 'סדנאות', value: 'סדנאות' },
    { label: 'פיתוח תוכנה', value: 'פיתוח תוכנה' },
    { label: 'מדע', value: 'מדע' },
    { label: 'צילום', value: 'צילום' },
  ]

const HorizontalScale = size => (size/393 * windowWidth);
const VerticalScale = size => (size/852 * windowHeight);

export { windowWidth, windowHeight ,HorizontalScale,VerticalScale,hobbies};