export class Player {
    id: string;
    slug: string;
    name: string;
}

export class PlayerRankings {
    totalRanking: PlayerRanking[];
}

export class PlayerRanking {
    player: Player;
    ranking: number;
    score: number;
}
