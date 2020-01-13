import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  data: any;
  hashes: any;
  file: any;
  files: any;
  submit: boolean;
  submitResponse: boolean;
  form: boolean;
  showUpdate: boolean;
  completed: number;
  totalFiles: number;
  animated: boolean;
  size: any;
  color = '#168ccc';
  url = 'https://api.test-rest-api-ggr0r5.ocs-webshare.ocs.nu/api/share';


  constructor(@Inject(DOCUMENT) private document: any, private http: HttpClient) {

    this.data = {
      to: '',
      from: '',
      message: '',
      hashes: ''
    };
  }

  @ViewChild('myPond', {static: false}) pond: any;

  pondOptions = {
    multiple: true,
    allowRevert: false,
    labelIdle: 'Drop files here',
    maxFiles: 3,
    acceptedFileTypes: ''
  }

  ngOnInit() {
    this.animated = false;
    this.totalFiles = 0;
    this.completed = 0;
    this.hashes = [];
    this.file = [];
    this.files = [];

    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.showUpdate = false;
  }

  pondHandleInit() {
    console.log('FilePond has initialised', this.pond);
  }

  upload(event: any) {
    this.totalFiles++;
  }

  delete(event: any) {
    this.totalFiles--;
  }

  onPost() {
    this.pond.getFiles().map(el =>
      this.files.push(el.file));
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('recipient', this.data.to);
    formData.append('recipient', this.data.to);
    formData.append('Access-Control-Allow-Origin', '*');
    formData.append('password', 'password');
    formData.append('expireIn', '168');
    formData.append('file', this.file);


    this.http.post(this.url, formData).subscribe();
  }
}
