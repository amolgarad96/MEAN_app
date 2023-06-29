import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';


@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit
{

  public details:any=[];

  constructor(public service:MarvellousService)
  {

  }

  ngOnInit() 
  {
    this.service.getlist().subscribe(data=>this.details=data);
    
  }


}
