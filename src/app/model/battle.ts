import { Team } from './team';
import { Competition } from './competition';
import { Player } from './player';

export class Battle {
    id: string;
    mode: string;
    competitors: Competitors[];
    result: string;
}

export class Competitors {
    id: string;
    players: Player[];
    result: string;
}

export class Result {
    id: string;
    name: string;
    point: number;
}

export class Mode {
    id: string;
    slug: string;
    name: string;
}

export class RankBy {
    value: string;
}
