import parser from './parser';
import reader from './reader';

export default class GameSavingLoader {
  static load() {
    return reader().then(parser);
  }
}
