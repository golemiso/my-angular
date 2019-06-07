import { Team } from './team';
import { Competition } from './competition';
import { Player } from './player';

export class Battle {
    id: string;
    mode: Mode;
    competitors: Competitors[];
    result: string;
}

export class BattleResults {
    id: string;
    results: Competitors[];
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

export class GroupingPattern {
    id: string;
    name: string;
    groups: Group[];
    rankBy: string;
}

export class Group {
    memberRankings: number[];
}
