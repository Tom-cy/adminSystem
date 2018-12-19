import { type } from "../action";

// 数据处理
const ebikeData = (state, action) => {
  switch (action.type) {
      case type.SWITCH_MENU:
          return {
              ...state,
              menuName:action.menuName
          };
      default:
          return {...state};
  }
};

export default ebikeData;