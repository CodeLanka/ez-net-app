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
  static getCombinedData = (categories, sites) => {
    return new Promise((resolve, reject) => {
      const finalArr = [];
      categories()
        .then((categoriesData) => {
          Object.keys(categoriesData).map((key, index) => {
            const title = key;
            const newTitle = title.charAt(0).toUpperCase() + title.slice(1);
            return finalArr.push({ id: index + 1, title: newTitle, thumbnail: undefined });
            // we have to add Thumbnail (both - to Firebase and a[[)
          });
          return finalArr;
        })
        .then((nextData) => {
          const newArray = [];
          nextData.map((key, index) => {
            sites(key.title)
              .then((siteData) => {
                const itemsArray = []; // helper Array to store all formatted items
                Object.keys(siteData).map((key1, index1) => {
                  return itemsArray.push({
                    id: `${finalArr[index].id}_${index1}`,
                    title: key1,
                    url: `http://${siteData[key1].url}`, // for now it will produce bad URL for links starting with http:// or https:// [needs to be changed in database]
                  });
                });
                newArray.push({ ...finalArr[index], items: itemsArray });
                if (newArray.length === finalArr.length) {
                  resolve(newArray);
                }
              });
          });
        })
        .catch(err => console.error(err));
    });
  };

  /**
   * Returns promise with all sites in given category
   * @param category
   * @returns {Promise}
   */
  static getSites = (category) => {
    return Firebase.database().ref(`/Sites/${category}`).once('value')
      .then(snapshot => snapshot.val());
  };

  /**
   * Returns promise with all categories
   * @returns {Promise}
   */
  static getCategories = () => {
    return Firebase.database().ref('/Categories').once('value')
      .then(snapshot => snapshot.val());
  }
}

export default Api;
