export class Player {
  id: string;
  name: string;
}

class Record {
  victory: number;
  defeat: number;
}

export class PlayerRecord {
  player: Player;
  record: Record;
}
