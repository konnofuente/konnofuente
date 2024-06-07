/* eslint-disable import/no-anonymous-default-export */

const ICON_PATH = './icons/'
const IMAGE_PATH = './images/'
const lOGO_PATH = './logos/'

const Images = {

  };

const Icons = {
    menuRoundIcon: require(ICON_PATH+'menu-round.png'),
    trelloIcon: require(ICON_PATH +'trello.png'),
    reactIcon: require(ICON_PATH +'react.png'),
    vuejsIcon: require(ICON_PATH +'vuejs.png'),
    flutterIcon: require(ICON_PATH +'flutter.png'),
    firebaseIcon: require(ICON_PATH +'firebase.png'),
  };
  
  const Logos = {
    whiteLogo: require(lOGO_PATH+'konnoFuente-logo-type-white.png'),
    darkLogo: require(lOGO_PATH+'konnoFuente-logo-type-dark.png'),
  };
  
  export default { Images, Logos,Icons };
  