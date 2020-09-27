import * as axios from '../../utils/axios'
// @ts-ignore
export default {
    // 页面的dispatch必须对应namespace
    namespace: 'home',
    // initialState
    state: { fetching: false },
    reducers: {
        getReq: (state: any) => {
            return { ...state, fetching: true }
        },
        getReqSuc: (state: any) => {
            return { ...state, fetching: false }
        },
    },
    // 页面跳转完成之前可以从这里获取到页面信息
    subscriptions: {
        setup({ dispatch, history }: any) {
            return history.listen(({ pathname, query }: any) => {
            });
        },
    },
    // sages
    effects: {
        //查询列表
        *queryList({ payload = {} }, { call, put }: any) {
            yield put({ type: 'getReq' });
            const data = yield call(axios.post, '/reporting/getReportCatgAndTaskList.do')
            yield put({ type: 'getReqSuc' });
        }
    }
}
