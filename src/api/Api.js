import RNFBlob from 'react-native-fetch-blob';
import Firebase from './Firebase';

class Api {
  /**
   * This method will return Promise containing something like this:
   {
    id: '1',
    title: 'පුවත් පත්',
    thumbnail: 'CATEGORY_NEWSPAPERS',
    items: [
      {
        id: '1_1',
        title: 'දිවයින',
        thumbnail: 'NEWSPAPERS_DIVAINA',
        url: 'http://www.divaina.com/',
      },
    ]
   }
   * @param categories [reference to categories Promise]
   * @param sites [reference to sites Promise]
   * @param images [reference to images Promise]
   * @returns {Promise}
   */
  static getCombinedData = (categories, sites, images) => {
    return new Promise((resolve) => {
      categories()
        .then((categoriesData) => {
          return Object.keys(categoriesData).map((key, index) => {
            const category = categoriesData[key];
            return {
              title: category.title,
              thumbnail: category.thumbnail,
              key: index,
              id: index + 1,
            };
          });
        })
        .then((categoriesData) => {
          const arrToReturn = [];
          let iterationNo = 0;
          return new Promise((resolveCat) => {
            categoriesData.map((value) => {
              if (value.thumbnail) {
                images(value.thumbnail)
                  .then((image) => {
                    iterationNo += 1;
                    arrToReturn.push({
                      ...value,
                      thumbnail: image,
                    });
                    if (iterationNo === categoriesData.length) {
                      resolveCat(arrToReturn);
                    }
                  });
              } else {
                iterationNo += 1;
                arrToReturn.push({
                  ...value,
                  thumbnail: null,
                });
                if (iterationNo === categoriesData.length) {
                  resolveCat(arrToReturn);
                }
              }
              return iterationNo;
            });
          });
        })
        .then((categoriesData) => {
          const arrToReturn = [];
          let iterationNo = 0;
          return new Promise((resolveSites) => {
            categoriesData.map((value) => {
              sites(value.title)
                .then((data) => {
                  iterationNo += 1;
                  const itemsArr = Object.keys(data).map(val => data[val]);
                  arrToReturn.push({
                    ...value,
                    items: itemsArr,
                  });
                  if (iterationNo === categoriesData.length) {
                    resolveSites(arrToReturn);
                  }
                });
              return iterationNo;
            });
          });
        })
        .then((data) => {
          const arrToReturn = [];
          let iterationNo = 0;
          return new Promise((resolveItems) => {
            data.map((value, index) => {
              arrToReturn.push({
                ...value,
                items: [],
              });
              value.items.map((valueItems) => {
                if (valueItems.thumbnail) {
                  images(valueItems.thumbnail)
                    .then((image) => {
                      iterationNo += 1;
                      arrToReturn[index].items.push({
                        ...valueItems,
                        thumbnail: image,
                        key: iterationNo,
                      });
                      if (iterationNo === data.length) {
                        resolveItems(arrToReturn);
                      }
                    });
                } else {
                  iterationNo += 1;
                  arrToReturn[index].items.push({
                    ...valueItems,
                    thumbnail: null,
                    key: iterationNo,
                  });
                  if (iterationNo === data.length) {
                    resolveItems(arrToReturn);
                  }
                }
                return iterationNo;
              });
            });
          });
        })
        .then(data => resolve(data));
    });
  };

  /**
   * Returns promise with all sites in given category
   * @param category
   * @returns {Promise}
   */
  static getSites = category => Firebase.database().ref(`/Sites/${category}`).once('value')
    .then(snapshot => snapshot.val());

  /**
   * Returns promise with all categories
   * @returns {Promise}
   */
  static getCategories = () => Firebase.database().ref('/Categories').once('value')
    .then(snapshot => snapshot.val());

  static getThumbnail = thumbnailUrl => Firebase.storage()
    .refFromURL(thumbnailUrl)
    .getDownloadURL()
    .then((url) => {
      return new Promise((resolve) => {
        RNFBlob
          .config({
            fileCache: true,
            appendExt: 'png',
          })
          .fetch('GET', url)
          .then((image) => {
            resolve(image.path());
          });
      });
    })
}

export default Api;
