import { Component } from 'preact'
import { observer } from 'mobx-preact'
@observer
class MainScene extends Component {
    render() {
        return <div className="todo-list">
            <h1>Hi</h1>
            {/* <h1 style={{ marginTop: '100px' }}>HELLO {userStore.returnCount}</h1>
            <div className="open-todos">
                <span>Open Todos</span>
                <font>{userStore.count}</font>
            </div>
            <div className="finished-todos">
                <span>Finished Todos</span>
                <button onClick={() => userStore.increate()}  >+</button>
            </div> */}
        </div>
    }
}

export default MainScene;
