import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export function getItem(key: string) {
    return storage.getString(key)
}
export function setItem(key: string, value: string) {
    return storage.set(key, value)
}
export function removeItem(key: string) {
    return storage.delete(key)
}
