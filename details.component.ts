import { Component, OnInit  } from '@angular/core';
import { DetailsService } from '../details.service';
import { DropdownService } from '../dropdown.service';
import { Dropdown } from './dropdown';
// import { detailservice } from 'detail.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
 

})
export class DetailsComponent  {
   selectedVersion !: String;
   versions = [
    {id: "12.0.7.8", name: "Version1"},
     {id: "7.0.7.9", name: "Version2"},
     {id: "2.0.7.8", name: "Version3"},
     {id: "5.0.7.8", name: "Version4"},
    
    
     ];
  

  // public schemas: schema[] = [

  //   { name: 'Column Name 1',datatype:'Integer', description:'Some sample Description' },
  //   { name: 'Column Name 2',datatype:'String', description:'Some sample Description' },
  //   { name: 'Column Name 3',datatype:'String', description:'Some sample Description' },
  //   { name: 'Column Name 4',datatype:'Date', description:'Some sample Description' },
  //   { name: 'Column Name 5',datatype:'Double', description:'Some sample Description' },
  
  // ];


  schemas:Array<any>=[];
    //  version:Array<any>=[];
    //  public versions: Dropdown[]=[];
  constructor(
  private detailService:DetailsService,private dropdownService:DropdownService
) { 

      this.detailService.getAlldetails().subscribe(
        (response)=>{
          console.log(response)
          this.schemas = response;
        }
      )
      // this.detailService.getAlldropdown().subscribe(
      //            (res)=>{
      //              console.log(res)
      //              this.versions = res;

      //              console.log(this.versions)
      //          }
      //          )

      }






//       version:Array<any>=[];


//   constructor(
  
//  ) { 

//       this.detailService.getAlldropdown().subscribe(
//          (response)=>{
//           console.log(response)
//           this.version = response;
//       }
//       )
//        }


}




// ngOnInit() 
// {
//   // this.detailservice.getdetail().subscribe(data=>this.details= data);

// }

// interface schema 
// {
// name:String;
// datatype:String;
// description:String;
// }


 