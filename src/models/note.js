import { queryNote, delNote, updateNote, addNote, getNoteDetail } from '@/services/api';

export default {
	namespace: 'note',

	state: {
		noteList: [],
		total: 0,
		noteDetail: {
			_id: '',
			author: 'biaochenxuying',
			category: [],
			comments: [],
			create_time: '',
			desc: '',
			id: 16,
			img_url: '',
			keyword: [],
			like_users: [],
			meta: { views: 0, likes: 0, comments: 0 },
			origin: 0,
			state: 1,
			tags: [],
			title: '',
			update_time: '',
		},
	},

	effects: {
		*queryNote({ payload }, { call, put }) {
			const { resolve, params } = payload;
			const response = yield call(queryNote, params);
			!!resolve && resolve(response); // 返回数据
			// console.log('response :', response)
			if (response.code === 0) {
				yield put({
					type: 'saveNoteList',
					payload: response.data.list,
				});
				yield put({
					type: 'saveNoteListTotal',
					payload: response.data.count,
				});
			}
		},
		*delNote({ payload }, { call, put }) {
			const { resolve, params } = payload;
			const response = yield call(delNote, params);
			!!resolve && resolve(response);
		},
		*addNote({ payload }, { call, put }) {
			const { resolve, params } = payload;
			const response = yield call(addNote, params);
			!!resolve && resolve(response);
		},
		*updateNote({ payload }, { call, put }) {
			const { resolve, params } = payload;
			const response = yield call(updateNote, params);
			!!resolve && resolve(response);
		},
		*getNoteDetail({ payload }, { call, put }) {
			const { resolve, params } = payload;
			const response = yield call(getNoteDetail, params);
			!!resolve && resolve(response);
			// console.log('response :', response)
			if (response.code === 0) {
				yield put({
					type: 'saveNoteDetail',
					payload: response.data,
				});
			}
		},
	},

	reducers: {
		saveNoteList(state, { payload }) {
			return {
				...state,
				noteList: payload,
			};
		},
		saveNoteListTotal(state, { payload }) {
			return {
				...state,
				total: payload,
			};
		},
		saveNoteDetail(state, { payload }) {
			return {
				...state,
				noteDetail: payload,
			};
		},
	},
};
