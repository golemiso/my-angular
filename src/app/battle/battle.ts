import { Team } from '../team/team';

export class Battle {
  id: string;
  title: string;
  mode: string;
  teams: Team[];
  result: BattleResult;
}

export class BattleResult {
  victory: string;
  defeat: string;
}
