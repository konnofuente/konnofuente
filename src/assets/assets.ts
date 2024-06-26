/* eslint-disable import/no-anonymous-default-export */

const ICON_PATH = './icons/'
const IMAGE_PATH = './images/'
const lOGO_PATH = './logos/'

const Images = {

  };

const Icons = {
    menuRoundIcon: require(ICON_PATH+'menu-round.svg'),
    trelloIcon: require(ICON_PATH +'trello.svg'),
    reactIcon: require(ICON_PATH +'react.svg'),
    vuejsIcon: require(ICON_PATH +'vuejs.svg'),
    flutterIcon: require(ICON_PATH +'flutter.svg'),
    firebaseIcon: require(ICON_PATH +'firebase.svg'),
  };
  
  const Logos = {
    whiteLogo: require(lOGO_PATH+'konnoFuente-logo-type-white.png'),
    darkLogo: require(lOGO_PATH+'konnoFuente-logo-type-dark.png'),
  };
  
  export default { Images, Logos,Icons };
  