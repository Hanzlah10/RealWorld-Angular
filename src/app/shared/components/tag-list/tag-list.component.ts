import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from '../../types/popularTag.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
})
export class TagListComponent implements OnInit{
@Input() tags:PopularTagType[] =[]
ngOnInit(): void {
  
}
}
