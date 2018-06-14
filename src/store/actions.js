import * as types from './mutation-types'
import { getUser, saveUser } from 'common/js/cache'

export const saveUserMsg = function ({commit}, user) {
  commit(types.SET_USER, saveUser(user))
}
