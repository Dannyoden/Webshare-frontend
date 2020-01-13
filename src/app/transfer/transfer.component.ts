import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  // providers: [EmailService]
})

export class TransferComponent implements OnInit {
  @Input() parentSize: number;
  hashes: any;

  ngOnInit() {
    this.hashes = [];
  }
}
