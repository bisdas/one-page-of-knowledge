const getFileSizeFromURL = (url) => {
    return new Promise((resolve, reject) => {
        try {
            fetch(url)
                .then((response) => response.blob())
                .then((blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const sizeInKb = // call a method that returns file size from base 64 string
                        // reference: https://github.com/bisdas/one-page-of-knowledge/blob/38fb450f30893e85a937cc34b90ef97b2f9b3ed1/Technology/Code%20Snippets/File%20size%20from%20Base64.js

                        resolve({ fileSize: sizeInKb });
                    };
                    reader.onerror = () => {
                        reject(reader.error);
                    };

                    reader.readAsDataURL(blob);
                });
        } catch (error) {
            reject(error);
        }
    });
};


/* 
*** References ***
https://developer.mozilla.org/en-US/docs/Web/API/FileReader
https://developer.mozilla.org/en-US/docs/Web/API/Blob
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Glossary/Base64 
*/