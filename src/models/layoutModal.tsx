// 全局路由modal
import * as axios from '../utils/axios'
import munuList from '../pages/components/menuList'
import _ from 'lodash'

interface IActivePageContent {
    title?: string,
    iconType?: string,
    path?: string,
    key?: number
    bannerTitle?: string
    className?: string
}

interface IInitialStateProps {
    showNav: boolean
    activeKey: number
    activePageContent: IActivePageContent
}

const initialState: IInitialStateProps = {
    showNav: false,
    activeKey: 1,
    activePageContent: munuList[0]
}

export default {
    namespace: 'layoutModal',
    state: initialState,
    reducers: {
        getReq: (state: any) => {
            return { ...state, fetching: true }
        },
        getReqSuc: (state: any) => {
            return { ...state, fetching: false }
        },
        setState: (state: any, { payload }: any) => {
            return { ...state, ...payload }
        }
    },
    // 页面跳转完成之前可以从这里获取到页面信息
    subscriptions: {
        setup({ dispatch, history }: any) {
            let _tempObj: IActivePageContent = {}
            return history.listen(({ pathname, query }: any) => {
                munuList.map((item) => {
                    if (item.path === pathname) {
                        _tempObj = _.cloneDeep( item )
                    } else if (pathname.indexOf('/project/') > -1) {
                        _tempObj = { ...munuList[3], bannerTitle: '' }
                    }
                })
                console.log('_tempObj', _tempObj);
                
                dispatch({
                    type: 'setState',
                    payload: { showNav: false, activePageContent: _tempObj }
                })
            });
        },
    },
    effects: {
        //查询列表
        *queryList({ payload = {} }, { call, put }: any) {
            yield put({ type: 'getReq' });
            const data = yield call(axios.post, '/reporting/getReportCatgAndTaskList.do')
            yield put({ type: 'getReqSuc' });
        }
    },
}