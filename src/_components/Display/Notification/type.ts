export interface IMessage {
    theme?: string;
    icon?:React.ReactNode | null;
    iconColor?: string;
    title?: string | null;
    titleColor?: string | null;
    titleSize?: string | null;
    titleLineHeight?: string | null;
    message:string;
    messageColor?: string;
    messageSize?: string;
    messageLineHeight?: string;
    backgroundColor?:string;
    position?: string;
    progressBar?: boolean;
    progressColor?:string;
    close?:boolean;
    timeout?: number;
    overlay?:boolean;
    overlayClose?:boolean;
    displayMode?:number | 0;
    target?:string | null;
    zindex? :number;
    maxWidth?:number | 600;
    messageType?:string;
    transitionIn?: string;
    layout?:1 | 2;

}