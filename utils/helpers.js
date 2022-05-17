module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  class_icon: (character_class) => {
    if (character_class === 'warrior') {
      return 'https://i.imgur.com/fZgn3nw.png'
    } else if (character_class === 'rogue')  {
      return 'https://i.imgur.com/qdcNloS.png'
    } else {
      return 'https://i.imgur.com/z97DOuz.png'
    }
  }
};
