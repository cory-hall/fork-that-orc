module.exports = {
  // helper to format dates on document
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  // helper to assign different classes to respective image
  class_icon: (character_class) => {
    if (character_class === 'warrior') {
      return 'https://i.imgur.com/fZgn3nw.png'
    } else if (character_class === 'rogue')  {
      return 'https://i.imgur.com/qdcNloS.png'
    } else {
      return 'https://i.imgur.com/z97DOuz.png'
    }
  },
  // helper to capitalize class_name when being returned from database
  capitalizeClass: (character_class) => {
    return character_class.charAt(0).toUpperCase() + character_class.slice(1);
  }
};

