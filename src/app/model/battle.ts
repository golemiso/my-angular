import { Team } from './team';

export class Battle {
    id: string;
    name: string;
    competitionId: string;
    mode: string;
    competitors: Competitors;
    result: string;
}

export class Competitors {
    left: Team;
    right: Team;
}
