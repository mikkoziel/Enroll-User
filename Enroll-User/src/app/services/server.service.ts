import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Class } from '../interfaces/class';
import { Group } from '../interfaces/group';
import { Professor } from '../interfaces/professor';
import { Schedule } from '../interfaces/schedule';
import { UserPreference } from '../interfaces/user-preference';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  httpAddress = "http://localhost:3999/user-handler";

  constructor(private http:HttpClient,) { 
  }
  
  // --GET------------------------------------------------------
  getSchedules(id: number) {
    const header = { headers: new HttpHeaders({
      'responseType': 'text',
      'id': id.toString()
    })};
    return this.http.get(this.httpAddress + "/schedules",
      header).pipe(
        // tap(x=> console.log(x)),
        map((x)=> this.parseStringToSchedules(JSON.stringify(x))),
        catchError(this.handleError('getSchedules'))
    )
  }
  

  getSchedule(schedule_id: number, user_id: number){
    const header = { headers: new HttpHeaders({
      'responseType': 'text',
      'id': user_id.toString()
    })};
    return this.http.get(this.httpAddress + "/schedules/" + schedule_id.toString(),
    header).pipe(
      // tap(x=> console.log(x)),
      map(x=> this.parseStringToSchedule(JSON.parse(JSON.stringify(x)))),
      catchError(this.handleError('getSchedule'))
    )
  }
  
  getProfessors() {
    const header = { headers: new HttpHeaders({
      'responseType': 'text',
      'id': '1'
    })};
    return this.http.get(this.httpAddress + "/professors",
      header).pipe(
        // tap(x=> console.log(x)),
        map((x)=> this.parseStringToProfessors(JSON.stringify(x))),
        catchError(this.handleError('getProfessors'))
    )
  }

  getUPForUser(user_id: number) {
    const header = { headers: new HttpHeaders({
      'responseType': 'text',
      'id': '1'
    })};
    return this.http.get(this.httpAddress + "/user-pref" + user_id.toString(),
      header).pipe(
        // tap(x=> console.log(x)),
        map((x)=> this.parseStringToUPs(JSON.stringify(x))),
        catchError(this.handleError('getUPForUser'))
    )
  }
  // --ERROR-----------------------------------------------------
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // --PARSER----------------------------------------------------
  parseStringToSchedules(schedules: any){
    let ret: Schedule[] = [];
    // console.log(schedules);
    let sch = JSON.parse(schedules);
    sch.schedules.forEach((schedule: any)=>{
      ret.push(this.parseStringToSchedule(schedule));
    });
    return ret;
  }

  parseStringToSchedule(schedule: any){
    return <Schedule>{
      id: schedule.scheduleID,
      name: schedule.name,
      status: schedule.status,
      semester: schedule.semester,
      description: schedule.description,
      classes: Array.from(schedule.classes, (cl: any) => 
        <Class>{
          id: cl.classId,
          name: cl.name,
          groups: Array.from(cl.groups, (group: any) =>
            <Group>{
              id: group.groupId,
              day: group.day,
              start: group.start,
              end: group.end,
              professor_id: group.professor_id
            }
          )   
      })
    };
  }

  parseStringToProfessors(professors: any){
    let ret: Professor[] = [];
    // console.log(professors);
    let profs = JSON.parse(professors);
    profs.professors.forEach((professor: any)=>{
      ret.push(this.parseStringToProfessor(professor));
    });
    return ret;
  }

  parseStringToProfessor(professor: any){
    // console.log(professor)
    return <Professor>{
      id: professor.professor_id,
      name: professor.name,
      surname: professor.surname
    }
  }

  parseStringToUPs(ups: any){
    let ret: UserPreference[] = [];
    // console.log(ups);
    let ups_json = JSON.parse(ups);
    if(ups_json != null){
      ups_json.user_preferences.forEach((up: any)=>{
        ret.push(this.parseStringToUP(up));
      });
    }
    return ret;
  }

  
  parseStringToUP(up: any){
    // console.log(professor)
    return <UserPreference>{
      user_id: up.user_id,
      group_id: up.group_id,
      points: up.points
    }
  }

}
