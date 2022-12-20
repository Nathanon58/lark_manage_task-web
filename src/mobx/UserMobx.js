import { computed, observable, action } from 'mobx'
import { setCookies } from '../store/useCookies'
class UserMobx {
    @observable isLogin = false
    @observable name = '';
    @observable count = 0;
    @observable access_token = '';
    @observable role = 'ADMIN';
    @observable menus = ['1']

    constructor() {
        this.onInitial();
    }

    @action
    async onInitial() {
        try {
            // getCookies('token_lmt') ? this.setCheckLogin(true) : this.setCheckLogin(false)
        } catch (err) {
        }
    }

    @action
    setCheckLogin(data) {
        this.isLogin = data
    }

    @action
    async onLogin(userInfo) {
        if (userInfo) {
            const { access_token } = userInfo
            this.access_token = access_token
            setCookies('token_lmt', access_token)
            this.setCheckLogin(true)
        }
    }

    @computed
    get onCheckLogin() {
        return this.isLogin
    }

    @computed
    get getName() {
        return this.name
    }

    @computed
    get returnCount() {
        return this.count
    }

    @action
    increate = () => {
        this.count = this.count + 1;
    }

    @action
    subtract() {
        this.count--;
    }

    @computed
    get returnToken() {
        return this.access_token
    }
}
export default new UserMobx();