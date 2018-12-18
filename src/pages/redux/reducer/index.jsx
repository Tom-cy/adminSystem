import { type } from "../action";

// 数据处理


const initialState = {
    menuName :'首页',
    // cityId:''
}
export default ( state = initialState , action )=>{

    switch (action) {
        case type.SWIT:
            return {
                ...state,
                menuName:action.menuName
            }
        default:
            return{
                ...state
            }
    }
}