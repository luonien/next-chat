export interface  IState {
    displayNavigation: boolean
    themeMode:"dark"|"light"
  }

export enum ActionType{
    UPDATE="UPDATE"
}
interface UpdateAction{
    type:ActionType,
    field:string,
    value:any
}

export type IAction = UpdateAction 

export const initState:IState={
    displayNavigation:true,
    themeMode:"light"
}

export function reducer(state:IState,action:IAction){
    switch(action.type){
        case ActionType.UPDATE:
        return {...state,[action.field]:action.value}
        default :throw new Error()
    }
}