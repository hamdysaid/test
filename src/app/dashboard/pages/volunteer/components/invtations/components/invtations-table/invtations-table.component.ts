import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from 'src/app/service/certificate.service';
import { invitationservice } from 'src/app/service/invitaion.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProofCertificateService } from 'src/app/service/proof-certificate.service';
import { Certificate } from 'src/app/models/certificate';
import { ProofCertificate } from 'src/app/models/ProofCertificate';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-invtations-table',
  templateUrl: './invtations-table.component.html',
  styleUrls: [
    '../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './invtations-table.component.css']
})
export class InvtationsTableComponent implements OnInit {
  @ViewChild('modalDetails', { static: true }) modalDetails: TemplateRef<any>;
  img ='../../../../../../assets/images/uploadImage.svg';
  profimage = "../../../../../../../../assets/images/back-proof.png";
  imagepath = environment.imageEndPoint.normal;
  language:string;
  constructor(
    protected  _modalService: NgbModal ,
    protected _invitationservice: invitationservice,
    protected _toasterService:ToastrService,
    private _profService:ProofCertificateService,
    private _certificateService:CertificateService,
    private trans: TranslateService) {
      this.language = localStorage.getItem("lang") || "en";
    }

  imagePath = environment.imageEndPoint;

  ngOnInit(): void {
    this._invitationservice.getPage(1, this._invitationservice.volunteerSearchPagenation);
  }
  certificateForm: FormGroup = new FormGroup({
    invitationId: new FormControl(0, [Validators.required]),
    image:   new FormControl(''),
    signatureFile:new FormControl(null, [Validators.required]),
    volunteerUserId:new FormControl(null, [Validators.required]),
    fullName: new FormControl('',[Validators.required]),
    fromStart:new FormControl('',[Validators.required]),
    toEnd:new FormControl('',[Validators.required]),
    eventName:new FormControl(null,[Validators.required]),
    numberHours:new FormControl('',[Validators.required]),
    creatorId:new FormControl('',[Validators.required]),
    });

  ShowCertficateForm(invitaionId:number, certificate:ProofCertificate|null) {
    if(certificate == null){
      this._toasterService.warning("This Invitaitation dose not have any proof");
      return;
    }
    this._modalService.open(this.modalDetails);
    this._invitationservice.GetById(invitaionId).pipe(
      tap({
        next:(res)=>{
          this.certificateForm.patchValue({
            invitationId: res.response.id,
            fullName: res.response.volunteerUser.fullName,
            fromStart: res.response.fromStart.slice(0,10),
            toEnd: res.response.toEnd.slice(0,10),
            eventName: res.response.jopTitle,
            numberHours: res.response.numberOfHours,
            volunteerUserId: res.response.volunteerUser.id,
            creatorId: res.response.creatorId
          });
          this.profimage = this.imagePath.normal + certificate.image;
        //console.log(res);
        }
      })
    ).subscribe({});
  }

  deleteInvitaion(id:number){
    // console.log(id);
    this._invitationservice.delete(id).subscribe({
      next:(res)=>{ 
    this._invitationservice.getPage(this._invitationservice.volunteerSearchPagenation.page??1, this._invitationservice.volunteerSearchPagenation);
    this._toasterService.success(this.trans.instant('Delete Successfuly'));
    //console.log(res);
  },
      error:(err)=>{
// console.log(err);
        this._toasterService.error(err.error.message);
      }
    });
  }

 onSubmit(){
    // console.log(this.certificateForm.value);
    this._certificateService.Create(this.certificateForm.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this._certificateService.entities.push(res.response);
        this._toasterService.success(this.trans.instant('Add Certificate Successfuly !!'));
        this.certificateForm.reset();
        this._modalService.dismissAll();
        this._invitationservice.getPage(this._invitationservice.pagenationEntities.pagination.currentPage);
      },
      error:(err: HttpErrorResponse)=>{
// console.log(err);
        this._toasterService.error(err.error.message);
      }
    });
 }

 onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files!;
  if (files.length > 0) {
    const file = files[0];
    // console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img = reader.result as string;
    };
    this.certificateForm.patchValue({
      signatureFile: file,
    });
  }
}

}
