import { ADD, DEL } from '../constants.js'
const initState = {}
export default function batterReducers (perState = initState, active) {
    const { type, data } = active
    switch (type) {
        case ADD:
            return { ...perState, ...data }
        case DEL:
            for (const key in perState) {
                if (Object.keys(data).includes(key)) {
                    delete perState[key]
                    delete data[key]
                    perState[key+ 'flag']=false
                }
            }
            return {  ...data,...perState }
        default:
            return perState
    }
}