import {v4 as uuidv4} from 'uuid';

export const newItemFromData = (data) => {
    return {
        id: uuidv4(),
        active: false,
        ...data,
    }
};

export const addNewItem = (data, goods) => {
    return [...goods, newItemFromData(data)]
};

export const removeElementById = (id, goods) => {
    return goods.filter((e) => e.id !== id)
};

export const removeActive = (active, goods) => {
    return goods.filter((e) => !e.active)
};


export const toggleElementById = (id, goods) => {
    return goods.map((good) => {
        if (good.id === id) {
            return {...good, active: !good.active}
        }
        return good;
    })
};

export const getSubTotal = (goods, active) => {
    return goods.filter((e) => e.active).reduce((acc, item) => {
        return acc + parseFloat(item.weight);
    }, 0)
};


export const getTotal = (goods) => {
    return goods.reduce((acc, item) => {
        return acc + parseFloat(item.weight);
    }, 0)
};