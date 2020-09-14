import {v4 as uuidv4} from 'uuid';

export const goods = [
    {
        id: uuidv4(),
        title: "Milk",
        weight: "1.5",
        description: "For kids",
        category: "Meat & Milk",
        active: false
    },
    {
        id: uuidv4(),
        title: "Meat",
        weight: "4",
        description: "Friends meeting",
        category: "Meat & Milk",
        active: false
    },
    {
        id: uuidv4(),
        title: "Eggs",
        weight: "0.5",
        description: "Breakfast",
        category: "Meat & Milk",
        active: false
    },
    {
        id: uuidv4(),
        title: "Apples",
        weight: "2.5",
        description: "Breakfast",
        category: "Vegetables",
        active: false
    },
    {
        id: uuidv4(),
        title: "Butter",
        weight: "0.5",
        description: "Sandwich",
        category: "Meat & Milk",
        active: false
    },
    {
        id: uuidv4(),
        title: "Wine",
        weight: "0.5",
        description: "Evening",
        category: "Alcohol",
        active: false
    },
];
