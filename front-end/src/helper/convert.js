export function converttobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file); // Use readAsDataURL() instead of readAsDataUrl()

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = error => {
            reject(error);
        };
    });
}
