export const setItem = (key, data ) =>{
    try {
            localStorage.setItem(key, data)
    } catch (error) {
        console.log('error saving data');
    }
}

export const getItem = (key) => {
    try {
            return localStorage.getItem(key)
    } catch (error) {
        console.log('error get data');
    }
}
export const removeItem = (key) =>{
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log('data qandaydur xato bor');
    }
}