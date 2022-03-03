import parser from './parser';
import reader from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return reader()
      .then((data) => parser(data))
      .then((data) => new GameSaving(JSON.parse(data)));
  }
}
