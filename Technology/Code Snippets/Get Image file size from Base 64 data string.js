const getFileSizeFromBase64 = (imageBase64String) => {
    try {
       const stringLength = imageBase64String.length - 'data:image/png;base64,'.length;
       const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
       const sizeInKb = sizeInBytes / 1000;
 
       return sizeInKb;
    } catch (error) {
       return 0;
    }
 };