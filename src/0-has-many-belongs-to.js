const { getId } = require('./utils');
/** FEEDBACK: Fire! Great job you passed all of these test cases! */
class ToDoItem {
  #allItems = []

  constructor(description, priorityLevel) {
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.id = getId();
    this.isDone = false;
    this.notDone = true;

    this.#allItems.push(this);
  }

  list() {
    return [...this.#allItems];
  }

}


class ToDoList {
  #items = [];
  static #allLists = []

  constructor(name) {
    this.id = getId();
    this.name = name;
    this.isDone = false

    ToDoList.#allLists.push(this);
  }
  createItem(description, priorityLevel) {
    const addedItem = new ToDoItem(description, priorityLevel);
    this.#items.push(addedItem);
    return addedItem;
  }

  getItems() {
    return [...this.#items]
  }

  getCompletedCount() {
    let counter = 0;
    this.#items.forEach(item => item.isDone ? counter++ : counter)
    return counter
  }

  removeItems(id) {
    this.#items.splice(this.#items.findIndex((item) => item.id === id), 1);

    // this.#items.forEach(item => item.isDone ? this.#items.splice(0, 1) : 'Need to do!')
    //idea, but I don't think it works
  }

  static list() {
    return [...ToDoList.#allLists];
  }
  static findBy(id) {
    return ToDoList.#allLists.find((list) => list.id === id);
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};