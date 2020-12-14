import { Time, WeekDay } from '@angular/common';

export interface Group{
    id?: number,
    day: number,
    start: String,
    end: String,
    professor_id?: number
    class_id?: number
}