// 它是整个按钮事件的触发行为，用来描述事件的过程，包括类型

export const type ={
    SWIT:'SWIT'
}
export function switchMenu(menuName){
    return {
        type: type.SWIT,
        menuName
    }
}