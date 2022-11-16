import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbTabsComponent } from 'mdb-angular-ui-kit/tabs';
import { MdbTabChange } from 'mdb-angular-ui-kit/tabs/tabs.component';

@Component({
  selector: 'app-grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.scss']
})

export class GridBaseComponent implements OnInit {
  @ViewChild('tabs') tabs!: MdbTabsComponent;

  onTabChange(event: MdbTabChange):void {
    console.log(event);
  }
  
  ngOnInit(): void {}

  closeResult!: string;
  nomeAluna!: string;
  caminho!: string;
  aula!: string;

  constructor(private modalService: NgbModal) {}

  open(content: any, _aula: string) {
    this.aula = _aula;

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
