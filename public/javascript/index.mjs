import { chessControl } from './control/control.mjs'
import { chessModel   } from './model/model.mjs'
import { chessView    } from './view/view.mjs'
 
const socket = io()

chessControl.start(chessModel, chessView)







