import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
})
export class SitesComponent implements OnInit {

  alunas: any[] = [
    { 
      nome: 'Ana Vitória', 
      site: 'LUA',
      endS: 'ana vitoria.html'
    }, 
    { 
      nome: 'Ana', 
      site: 'Zahnuvi',
      endS: 'ana.html'
    }, 
    { 
      nome: 'Bia Moço', 
      site: 'Escola de bolos',
      endS: 'bia-moço.html'
    }, 
    { 
      nome: 'Gabrielle', 
      site: 'Gabi bolos',
      endS: 'gabrielle.html'
    }, 
    { 
      nome: 'Melissa', 
      site: 'Mulheres no poder',
      endS: 'MELISSA.html'
    }, 
    { 
      nome: 'Bia Neves', 
      site: '---',
      endS: 'bia_neves.html'
    }, 
    { 
      nome: 'Gabs', 
      site: '---',
      endS: 'gabs.html'
    }, 
  ];

  ngOnInit(): void {}

  closeResult!: string;
  nomeAluna!: string;
  caminho!: string;

  constructor(private modalService: NgbModal) {}

  open(content: any, nome: string, cam: string) {
    this.nomeAluna = nome;
    this.caminho = cam;

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
