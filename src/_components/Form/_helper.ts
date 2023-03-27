import {get} from 'lodash';
export const getMessage = (errors:any,name:string) => {
    const messageArr = get(errors,name);
    if(messageArr) {
        return messageArr.message;
    }
    return null;
}

export const SelectBoxPoperProps: any = {
    PaperProps :{
        className:'select-dropdown-menu-container',
        style:{maxHeight:300}
    },
    anchorOrigin: {
        vertical:'bottom',
        horizontal:'left'
    },
    transformOrigin: {
        vertical:'top',
        horizontal:'left'
    }
    // getContentAnchorEl:null
}