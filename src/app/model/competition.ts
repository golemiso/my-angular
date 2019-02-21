export class Competition {
    id: string = '';
    slug: string = '';
    name: string = '';
    schedule: Schedule = new Schedule();
    participants: string[] = [];
    battleHistories: string[] = [];
}

class Schedule {
    start: Date = new Date();
    end: Date = new Date();
}
