export const convertToFloat = (value) => {
    return value ? parseFloat(value) : 0;
}

export const downloadDataFromURL = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.click();
}