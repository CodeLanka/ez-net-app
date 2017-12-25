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
   * @returns {Promise}
   */
  static getCombinedData = (categories, sites) => new Promise((resolve, reject) => {
    const finalArr = [];
    categories()
      .then((categoriesData) => {
        Object.keys(categoriesData).map((key, index) => {
          const categoryObject = categoriesData[key];
          return finalArr.push({
            id: index + 1,
            title: categoryObject.title,
            thumbnail: categoryObject.thumbnail,
          });
        });
        return finalArr;
      })
      .then((nextData) => {
        const newArray = [];
        nextData.map((key, index) => sites(key.title)
          .then((siteData) => {
            const itemsArray = [];
            Object.keys(siteData).map((key1, index1) => itemsArray.push({
              id: `${finalArr[index].id}_${index1}`,
              title: siteData[key1].title,
              url: siteData[key1].url,
              thumbnail: siteData[key1].thumbnail,
            }));
            newArray.push({ ...finalArr[index], items: itemsArray });
            if (newArray.length === finalArr.length) {
              resolve(newArray);
            }
          }));
      })
      .catch(err => reject(err));
  });

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
}

export default Api;
