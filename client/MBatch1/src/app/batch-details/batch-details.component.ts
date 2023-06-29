import { Component,OnInit} from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit
{

  public details:any=[];

  constructor(public service:MarvellousService)
  {

  }

  ngOnInit() 
  {
    this.service.getDetails().subscribe(data=>this.details=data)
    
  }

}
