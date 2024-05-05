import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const interests = [
    { label: 'חופים', value: 'חופים' },
    { label: 'הרפתקאות', value: 'הרפתקאות' },
    { label: 'שייט', value: 'שייט' },
    { label: 'קמפינג', value: 'קמפינג' },
    { label: 'טיולים', value: 'טיולים' },
    { label: 'טיפוס', value: 'טיפוס' },
    { label: 'נוודות דיגטלית', value: 'נוודות דיגיטלית' },
    { label: 'טבע', value: 'טבע' },
    { label: 'חיי לילה', value: 'חיי לילה' },
    { label: 'גלישה', value: 'גלישה' },
    { label: 'טיול קרוואנים', value: 'טיול קרוואנים' },
    { label: 'התנדבות', value: 'התנדבות' },
    { label: 'תרמילאים', value: 'תרמילאים' },
    { label: 'הוסטל', value: 'הוסטל' },
    { label: 'מלונות יוקרתיים', value: 'מלונות יוקרתיים' },
  ]

const HorizontalScale = size => (size/393 * windowWidth);
const VerticalScale = size => (size/852 * windowHeight);

const SingleCharToString = (char) => {
  switch (char) {
    case 'ז':
      return 'גבר';
    case 'נ':
      return 'אישה';
    case 'א':
      return 'אחר';
    default:
      return '';
  }
}

const mapToSingleChar = (label) => {
  switch (label) {
    case 'גבר':
      return 'ז';
    case 'אישה':
      return 'נ';
    case 'אחר':
      return 'א';
    default:
      return '';
  }
}

export { windowWidth, windowHeight ,HorizontalScale,VerticalScale,interests,SingleCharToString,mapToSingleChar};
