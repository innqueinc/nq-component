import objectToOption from "./objectToOption";

function GetOption(targetClass, indexes, word, callback, find) {
  this.query = {
    count: true,
    limit: 20,
    where: {}
  };

  if (word && indexes.length > 0) {
    this.query.where['$or'] = indexes.map(index => {
      const or = {};
      or[index] = {
        '$regex': word,
        '$options': 'i'
      };
      return or;
    });
  }

  clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {
    find.execute(targetClass, this.query).then(({
      objects
    }) => {
      callback(objects.map(obj => objectToOption(obj, indexes)));
    });
  }, 300);
}

export default GetOption;