import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { custFormValidator, forbiddenNameValidator } from './customValidator';
import { PostsvcService } from '../../services/postsvc.service';
import { Post } from '../../domain/post';


@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe,
    MatInputModule,
    MatAutocompleteModule,
  ],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.scss'
})
export class FormDemoComponent implements OnInit{
 
  postOptions: Post[] = [];
  filteredOptions?: Post[];

  postBody?: Post;

  customForm: FormGroup;


  constructor(private postSvc: PostsvcService) {

    this.customForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/^hello$/i)
      ]
      ),
      reqId: new FormControl('',[ Validators.required]),
      autocomplete: new FormControl('')
    },
      { validators: custFormValidator }
    );
  }

  ngOnInit() {
    this.initializeDs();

    this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => {
            return this._filter(val || '')
       })
    ).subscribe({
      next: x=>this.filteredOptions=(x)
    })
  }

  private _filter(value: string): Observable<Post[]> {
    const filterValue = value.toLowerCase();
    return (this.postSvc.getPosts()).pipe(
      map(x => x.filter(option => option.title?.toLowerCase().includes(filterValue)))
    )
  }

  initializeDs(){
    this.postSvc.getPosts().subscribe({
      next: x=>{
        this.postOptions=x
        this.filteredOptions=(this.postOptions);
      }
    })
  }

 

  onSubmit() {
    const reqValue: string = this.reqIdControl.value;
    const asyncResponse = this.postSvc.getPost(reqValue);
    asyncResponse.subscribe({
      next: x => this.postBody = x,
      error: x => this.postBody = { title: "Something goes wrong." }
    })

  }

  get nameControl() {
    return this.customForm.get('name')!;
  }

  get reqIdControl() {
    return this.customForm.get('reqId')!;
  }
  get autocompleteControl() {
    return this.customForm.get('autocomplete')!;
  }
}


