import { Component, OnInit } from '@angular/core';
import { PoiActions, PoiSelectors, PoiEntity } from 'libs/poi/src';
import { Store } from '@ngrx/store'

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {

  pois$ = this.store.select(PoiSelectors.getAllPoi);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init());
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }))
  }

}
