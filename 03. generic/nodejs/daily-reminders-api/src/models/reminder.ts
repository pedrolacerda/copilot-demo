export class Reminder {
    id: number;
    title: string;
    description: string;
    time: string;

    constructor(id: number, title: string, description: string, time: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.time = time;
    }
}