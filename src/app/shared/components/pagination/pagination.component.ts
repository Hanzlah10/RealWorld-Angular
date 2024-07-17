import { Component, Input, OnInit} from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
  @Input() total: number=0;
@Input() limit: number = 20
@Input() currentPage: number = 1
@Input() url: string = ""
pagesCount:number = 1
pages:number[]=[]
constructor(private utils:UtilsService){}
ngOnInit():void{
  
  console.log(this.limit);
  console.log(this.url,this.total);
  
this.pagesCount=Math.ceil(this.total/this.limit)

this.pages = this.pagesCount>0 ? this.utils.range(1,this.pagesCount):[]

  console.log('pagesCount',this.pages)
}
}
