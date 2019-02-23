import { Team } from './team';
import { Competition } from './competition';

export class Battle {
    id: string;
    name: string;
    competition: Competition;
    mode: string;
    competitors: Competitors;
    result: string;
}

export class Competitors {
    left: Team;
    right: Team;
}
