import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {StateDataService} from "../../services/state-data.service";

@Component({
  selector: 'app-list-navigation',
  templateUrl: './list-navigation.component.html',
  styleUrls: ['./list-navigation.component.css']
})
export class ListNavigationComponent implements OnInit, OnDestroy {
  private sub: Subscription | undefined;


  constructor(private route: ActivatedRoute, private router: Router,
              private stateDataService: StateDataService) {
  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      const id = params['tab']
      this.stateDataService.initData(id);
    })
  }

  ngOnDestroy() {
    this.sub!.unsubscribe();
  }

  changeQuery(event: Event) {
    const target = event.target as Element;
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {tab: target.id}});
  }


}
