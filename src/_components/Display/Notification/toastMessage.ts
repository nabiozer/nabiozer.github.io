import iziToast from "izitoast";
import { IMessage } from "./type";

const renderIcon = (messageType: string | undefined) => {
  switch (messageType) {
    case "success":
      return "fa fa-check";
    case "error":
      return "fa fa-exclamation-circle";
    case "info":
      return "fa fa-info-check";
    case "warning":
      return "fa fa-exclamation-triangle";
    default:
        return null; 
  }
};

const toastMessage = (messageOptions:IMessage):Promise<{confirm:boolean}> => {
    const messageDefault:IMessage = {
        theme: "dark",
        icon: renderIcon(messageOptions.messageType),
        iconColor:'white',
        title:'',
        titleColor:'white',
        titleSize:'',
        titleLineHeight:'',
        message: '',
        messageColor:'',
        messageLineHeight: '',
        messageSize: '',
        backgroundColor:'',
        position:'bottomLeft',
        progressBar:false,
        progressColor: 'rgb(229,61,65)',
        close:true,
        timeout:3000,
        overlay:false,
        overlayClose:true, 
        displayMode:1,
        target:null,
        zindex:99999,
        maxWidth:600,
        messageType:'show',
        transitionIn:'fadeIn',
        layout:2,
    }

    return new Promise((resolve) => {
      const iziMessage:any = {
        ...messageDefault,
        ...messageOptions,
      };

      switch (iziMessage.messageType) {
        case "show":
          iziToast.show(iziMessage);
          break 
        case "info":
          iziToast.info(iziMessage);
          break 
        case "success":
          iziToast.success(iziMessage);
          break 
        case "warning":
          iziToast.warning(iziMessage);
          break 
          case "error":
            iziToast.error(iziMessage);
            break 
        default:
            iziToast.success(iziMessage)
      }
    })

    
}


export default toastMessage;