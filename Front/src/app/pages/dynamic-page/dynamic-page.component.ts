import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { page, PageLoader } from "../../../lib/pages/pages";

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent {

  private id:string = "";
  protected page:page;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    var pages = new PageLoader().Load();
    this.route.params.subscribe((param)=>{
      pages.forEach(jp => {
        if (jp.name == param['id']) {
          this.page = jp;
        }
      });
    });
  }

}
