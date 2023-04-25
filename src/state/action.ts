export type Action = 
| { type: "MENU_LIST", payload:{ id:number, name:string, icon:string,slug:string,active:boolean}};

export const menuList = (id:number, name:string, icon:string,slug:string,active:boolean): Action => ({
    type:"MENU_LIST", 
    payload: {id, name,icon,slug,active}
});