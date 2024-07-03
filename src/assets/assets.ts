/* eslint-disable import/no-anonymous-default-export */

const ICON_PATH = './icons/'
const IMAGE_PATH = './images/'
const lOGO_PATH = './logos/'

const Images = {
  
  heroImage: require(IMAGE_PATH+'konnomelifuente.png'),
  projetCardDefault: require(IMAGE_PATH+'projetCardDefault.png'),
  sittinAtOffice: require(IMAGE_PATH+'konnofuente-sitting-at-office.svg'),
  xbetEvent: require(IMAGE_PATH+'1xbetEvent-konnofuente.svg'),
  atRadioEvent: require(IMAGE_PATH+'at-readio-event-konnofuente.svg'),
  hackathonEvent: require(IMAGE_PATH+'hackathon-award-konnofuente.svg'),
  smillingOffice: require(IMAGE_PATH+'smilling-at-office-konnofuente.svg'),
  tableSet: require(IMAGE_PATH+'table-set-konnofuente.svg'),


  scheduleChart: require(IMAGE_PATH+'chart.svg'),
  entrepreneurPassion: require(IMAGE_PATH+'entrepreneur_passion.svg'),
  myStackPc: require(IMAGE_PATH+'my_stacks_pc.svg'),
  seekingKnowledge: require(IMAGE_PATH+'seeking_knowledge.svg'),
  weekendLeisure: require(IMAGE_PATH+'weekend_leisure.svg'),


  };

const Icons = {
    menuRoundIcon: require(ICON_PATH+'menu-round.svg'),
    trelloIcon: require(ICON_PATH +'trello.svg'),
    reactIcon: require(ICON_PATH +'react.svg'),
    vuejsIcon: require(ICON_PATH +'vuejs.svg'),
    flutterIcon: require(ICON_PATH +'flutter.svg'),
    firebaseIcon: require(ICON_PATH +'firebase.svg'),
    emailGreyIcon: require(ICON_PATH +'email-grey.svg'),
    linkedinGreyIcon: require(ICON_PATH +'linkedin-grey.svg'),
    mediumGreyIcon: require(ICON_PATH +'medium-grey.svg'),
    githubGreyIcon: require(ICON_PATH +'github-grey.svg'),
    instagramGreyIcon: require(ICON_PATH +'instagram-grey.svg'),
  };
  
  const Logos = {
    whiteLogo: require(lOGO_PATH+'konnoFuente-logo-type-white.png'),
    darkLogo: require(lOGO_PATH+'konnoFuente-logo-type-dark.png'),
  };
  
  export default { Images, Logos,Icons };
  