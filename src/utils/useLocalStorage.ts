import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
	const isServer = typeof window === 'undefined'

	const [storedValue, setStoredValue] = useState(() => {
		if (isServer) {
			return initialValue
		}
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})

	const setValue = (value: T) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			if (!isServer) {
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		} catch (error) {
			console.log(error)
		}
	}
	return [storedValue, setValue]
}
