import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'; //便于调试工具
import batterReducers from './reducers/battle.js'
import thunk from 'redux-thunk'//处理异步任务
// 合并store
const allReducers=combineReducers({
    battle:batterReducers
})
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))