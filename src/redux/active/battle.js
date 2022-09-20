import { ADD, DEL } from '../../redux/constants';
export const addBattle = objBattle => ({ type: ADD, data: objBattle })
export const delBattle = objBattle => ({ type: DEL, data: objBattle })
