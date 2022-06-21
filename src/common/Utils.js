import { IMAGE_URL } from "./Constants"

export const convertToFloat = (value) => {
    return value ? parseFloat(value) : 0;
}

export const downloadDataFromURL = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.click();
}

export const getImageURL = (filename) => {
    return `${IMAGE_URL}${filename}`;
}

export const getPosition = (container, clientX, clientY, offsetX, offsetY) => {
    const { top, left, width, height } = container.getBoundingClientRect();
    const x = (clientX - left - offsetX) * 100 / width;
    const y = (clientY - top - offsetY) * 100 / height;
    return { x, y };
}

export const mergeArray = (firstArray, secondArray) => {
    let farray = [...firstArray];

    farray.length !== 0 && secondArray.map(item => {
        const indexOfObject = farray.findIndex(object => {
            return object.RecId === item.RecId;
        });
        if (indexOfObject >= 0) {
            farray.splice(indexOfObject, 1)
        }
    })

    return [...farray, ...secondArray];
}

export const getColorBasedOnStatus = (status) => {
    switch (status) {
        case "Non-Resolved":
            return "orange";
        case "Open":
            return "red";
        case "Resolved":
            return "green";
        case "Escalate":
            return "gray";
        default:
            return "gray";

    }
}