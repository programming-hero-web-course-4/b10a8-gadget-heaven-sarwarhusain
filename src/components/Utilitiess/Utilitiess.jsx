import { toast } from "react-toastify"

const getStoreCartList = () => {
    // readList
    const storedListStr = localStorage.getItem('cart-list')
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
        toast('Already Exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListStr)
        toast('This Product Added To Your Cart List')
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
        toast('Already exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        toast('This Product Added To Your Wish List')
    }
}



export { AddToStoreCartList, AddToStoreWishList, getStoreCartList, getStoreWishList }