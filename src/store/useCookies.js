import Cookies from 'universal-cookie';

const config = {
	path: '/',
	expires: getExpire()
}

const cookies = new Cookies();

function getExpire() {
	//Note: 60 minutes * 60 seconds * 24 hours * 1000(for milliseconds) * 15 days
	return new Date(new Date().getTime() + (60 * 60 * 24 * 1000 * 15))
}

export const setCookies = (name, value) => {
	cookies.set(name, value, { ...config });
}

export const getCookies = (name) => {
	return cookies.get(name)
}

export const removeCookies = (name) => {
	return cookies.remove(name)
}