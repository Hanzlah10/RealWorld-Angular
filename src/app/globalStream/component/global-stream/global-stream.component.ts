import { Component, OnInit } from '@angular/core';
import { StreamComponent } from 'src/app/shared/components/stream/stream.component';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';
import { StreamtogglerComponent } from 'src/app/shared/components/streamtoggler/streamtoggler.component';
import { PopularTagsComponent } from 'src/app/shared/components/populartags/popular-tags.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mc-global-stream',
    standalone: true,
    templateUrl: './global-stream.component.html',
    imports: [StreamComponent, BannerComponent,StreamtogglerComponent,ErrorMessage,PopularTagsComponent,CommonModule]
})
export class GlobalStreamComponent implements OnInit {
apiUrl = '/articles'
tagName: string|undefined;
ngOnInit(): void {
    console.log(this.apiUrl);
    console.log("Global Stream is loaded");
    
}
}
// https://api.realworld.io/api