import { toast } from "react-toastify"

const getStoreCartList = () => {
    // readList
    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const AddToStoreCartList = (id) => {
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        console.log(id, 'already exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        toast('this book added to your read list')
    }
}


const getStoreWishList = () => {
    // wishList
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const AddToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        console.log(id, 'already exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
    }
}



export { AddToStoreCartList, AddToStoreWishList, getStoreCartList ,getStoreWishList}