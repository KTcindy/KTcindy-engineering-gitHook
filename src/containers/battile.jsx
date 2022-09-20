// ui组件
import PattleUi from '../views/Battle/index.jsx'
import { connect } from 'react-redux'
import { addBattle, delBattle } from '../redux/active/battle.js'
export default connect(
    state => ({ battleObject: state.battle }),
    {
        addBattle,
        delBattle
    }
)(PattleUi)