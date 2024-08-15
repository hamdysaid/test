import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Certificate } from 'src/app/models/certificate';
import { CertificateService } from 'src/app/service/certificate.service';
import { ProofCertificateService } from 'src/app/service/proof-certificate.service';
import { GetDayName } from 'src/app/utils/extensions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-volunteer-certificate-page',
  templateUrl: './volunteer-certificate-page.component.html',
  styleUrls: ['../../../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './volunteer-certificate-page.component.css']
})
export class VolunteerCertificatePageComponent implements OnInit{
  getDayName= GetDayName;
  certficate:Certificate = {
    signature: '',
    signatureFile: null,
    volunteerUserId: '',
    volunteerUser: null,
    creatorId: '',
    statusId: 0,
    status: null,
    invitationId: 0,
    invitation: null,
    id: 0,
    dateTimeStart: '',
    dateTimeEnd: '',
    eventName: '',
    numberHours: 0,
    fullName: '',
    createdAt: null,
    updatedAt: null
  };
  imagePath= environment.imageEndPoint;

  @ViewChild("showCertificateModalLabel", { static: true }) showCertificateModalLabel: TemplateRef<any>;
  @ViewChild("printContent", { static: false}) printDiv: ElementRef<any>;
  
  constructor(
    private _modal:NgbModal,
    private _activatedRout:ActivatedRoute,
    protected _proofCertificateService:ProofCertificateService,
    private _toastr:ToastrService ,
    private _certificateService: CertificateService
     ) {}
  
  ngOnInit(): void {
    this._activatedRout.paramMap.subscribe({
      next:(res)=>{
        //console.log(res);
        this._proofCertificateService.getProofCertficateForTheVolunteer(res.get('id')!).subscribe({
          next:(res)=>{
            this._proofCertificateService.pagenationEntities = res.response;
            //console.log(res);
          }
        });
      }
    });
  }

  showCertficate(id:number, invitationId:number){
    let data =  this._proofCertificateService.pagenationEntities.data.find(x=> x.id == id);
    if(!data?.certificateCreated){
      this._toastr.show("There Is No Certficate for this Proof");
      return;
    }
    this._certificateService.getCerficateByInvitationId(invitationId).pipe(tap({
      next: (res) => {
        this.certficate = res.response;
    localStorage.setItem("CertficateId", `${res.response.id}`);

        //console.log(res);
      }
    })).subscribe();
    this._modal.open(this.showCertificateModalLabel);
  }
  send(){
    let id = localStorage.getItem("CertficateId");
    if(id != null)
    this._certificateService.sendEmail(+id).subscribe({
      next:(res)=>{
          this._toastr.success(res.message);
          this._modal.dismissAll();
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
  }

  print(){
    let  printDiv = document.getElementById("show_certificate");
    const printContents = printDiv!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
  }
  }
  