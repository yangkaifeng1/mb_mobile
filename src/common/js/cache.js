import storage from 'good-storage'

const USER = '_user_'

export function saveUser (user) {
  storage.set(USER, user)
  return user
}

export function  getUser() {
  return storage.get(USER, {})
}
