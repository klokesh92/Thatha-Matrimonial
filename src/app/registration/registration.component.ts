import { Component, OnInit } from '@angular/core';



interface religion{
    value: string;
    viewValue: string;
}

interface prefer{
    key: string;
    keyValue: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  firstname;
  lastname;
  username;
  password;
  dateOfBirth;
  selectedValue:string[];


  rel:religion[] = [
    {value:'hindu' , viewValue: 'Hindu'},
    {value:'muslim' , viewValue: 'Muslim'},
    {value:'cristian' , viewValue: 'Cristian'},
    {value:'sikh' , viewValue: 'Sikh'},
    {value:'jain' , viewValue: 'Jain'}
  ]

  relation:prefer[] = [
    {key:'myself' , keyValue: 'Myself'},
    {key: 'son' , keyValue: 'Son'},
    {key: 'daughter' , keyValue: 'Daughter'},
    {key: 'brother' , keyValue: 'Brother'},
    {key: 'sister' , keyValue: 'Sister'},
    {key: 'relative' , keyValue: 'Relative'},
    {key: 'friend' , keyValue: 'Friend'}
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
