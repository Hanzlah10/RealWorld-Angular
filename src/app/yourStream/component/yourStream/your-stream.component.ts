import { Component, OnInit } from '@angular/core';
import { StreamComponent } from 'src/app/shared/components/stream/stream.component';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';
import { StreamtogglerComponent } from 'src/app/shared/components/streamtoggler/streamtoggler.component';
import { PopularTagsComponent } from 'src/app/shared/components/populartags/popular-tags.component';

@Component({
    selector: 'mc-your-stream',
    standalone: true,
    templateUrl: './your-stream.component.html',
    styleUrl: './your-stream.component.css',
    imports: [StreamComponent, BannerComponent,StreamtogglerComponent,ErrorMessage,PopularTagsComponent]
})
export class YourStreamComponent implements OnInit {
apiUrl = '/articles/feed'
ngOnInit(): void {
    console.log(this.apiUrl);
    
}
}
