import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Project } from '../model/project';

@Injectable()
export class NodeService {
    private data = new BehaviorSubject(new Project());
    data$ = this.data.asObservable();
  
    changeProject(data: Project) {
      this.data.next(data)
    }
}