/**
 *
 * TODO ฟังก์ชั่นสำหรับ set, get localStorage
 */
export const getStored = (filedName) => {
    return localStorage.getItem(filedName) && localStorage.getItem(filedName) !== 'undefined' ? JSON.parse(localStorage.getItem(filedName)) : '';
};

export const setStored = (filedName, value) => {
    return localStorage.setItem(filedName, JSON.stringify(value));
};

export const removeStored = (filedName) => {
    return localStorage.removeItem(filedName);
};

export const clearStored = () => {
    return localStorage.clear();
};