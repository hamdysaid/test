import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { AgendaService } from 'src/app/service/agenda.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-agenda-search',
  templateUrl: './report-agenda-search.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './report-agenda-search.component.css']
})
export class ReportAgendaSearchComponent implements OnInit {
  constructor(
    private _toastr: ToastrService,
    private _reportService: ReportService,
    protected _agendaService: AgendaService) {

  }
  loading: boolean = false;
  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }
  exprtToExcel() {
    this.loading=true;
    this._reportService.downloadAgendaExcel(localStorage.getItem('name')!, 'Agenda').subscribe({
      next: (res) => {
        let filName = res.headers.get('content-disposition')?.split(';')[1].split('=')[1];
        // console.log(filName);
        let blob = res.body as Blob;
        let a = document.createElement('a');
        a.download = filName ?? 'Agenda Data';
        a.href = window.URL.createObjectURL(blob);
        a.click();
        this.loading=false;
      },
      error: (err) => {
        this._toastr.error(err.error.message);
        // console.log(err);
      },
    });
  }
  submit() {
    if (this.form.value.search) {
      this._reportService.agendaFilter.search = this.form.value.search.trim();
    } else {
      this.form.value.search = null;
    }
    this._reportService.getPage(1);
  }
}
