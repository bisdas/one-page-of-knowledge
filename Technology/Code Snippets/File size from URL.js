const getFileSizeFromURL = (url) => {
    return new Promise((resolve, reject) => {
        try {
            fetch(url)
                .then((response) => response.blob())
                .then((blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const sizeInKb = // call a method that returns file size from base 64 string
                        // reference: https://github.com/bisdas/one-page-of-knowledge/blob/d201879d9d9f8c3ac599c378ef82ba11e7d2b6c8/Technology/Code%20Snippets/Get%20Image%20file%20size%20from%20Base%2064%20data%20string.js

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