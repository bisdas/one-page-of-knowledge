
const getImageDimension = (source) => {
    const promise = new Promise((resolve, reject) => {
       try {
          const image = new Image();
          image.onload = () => {
             resolve({
                dimension: {
                   height: image.naturalHeight,
                   width: image.naturalWidth
                }
             });
          };

          image.src = source;
       } catch (error) {
          reject(error);
       }
    });

    return promise;
};
 


/*
 References

 https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement
*/