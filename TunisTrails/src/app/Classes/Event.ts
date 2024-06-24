export class Event {
    constructor(
        public idEvent: number,
        public title: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public latitude: number,
        public longitude: number,
        public maxParticipants: number,
    ){}
}
