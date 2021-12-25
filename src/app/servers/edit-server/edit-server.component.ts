import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactive } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactive {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false
  changesSaved = false

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams=>{
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
    })
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) return true
    if (
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      &&
      !this.changesSaved
    ) {
      return confirm('do you want to discard the changes?')
    }
    else return true
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
