import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEntity } from 'src/app/models/base-entity';
import { ApiResponse, Pagenation, PagenationInfo } from 'src/app/models/response';
import { environment } from 'src/environments/environment';

export class BaseService<T extends BaseEntity> {
  slecteeId:number=0;
  pagenateInfo:PagenationInfo={
    currentPage: 0,
    pageCount: 0,
    pageSize: 0,
    rowCount: 0
  };
  search:string|null = null;
  public entities: T[] = [];
  public pagenationEntities: Pagenation<T> = {
    pagination: {
      currentPage: 1,
      pageCount: 0,
      pageSize: 20,
      rowCount: 0
    },
    data: []
  };

  constructor(protected http: HttpClient, protected endPoint: string) {}
  baseURL = environment.API_URL;
  
  Get(page:number|null=null,pageSize:number|null=null,sortColumn:string|null=null,sortDirection:string|null=null, search:string|null=null): Observable<ApiResponse<Pagenation<T>>> {
    let query = "?";
    if(page)query+=`&page=${page}`;
    if(pageSize)query+=`&pageSize=${pageSize}`;
    if(sortColumn)query+=`&sortColumn=${sortColumn}`;
    if(search)query+=`&search=${search}`;
    if(sortDirection)query+=`&sortDirection=${sortDirection}`;

    return this.http.get<ApiResponse<Pagenation<T>>>(`${this.baseURL}${this.endPoint}${query}`);
  }

  GetPagenation(pageNumber: number){
    this.Get(pageNumber, this.pagenateInfo.pageSize).subscribe({
      next:(value)=>{
        this.pagenationEntities = value.response;
      }
    });
  }

  GetAll(): Observable<ApiResponse<Pagenation<T>>> {
    return this.http.get<ApiResponse<Pagenation<T>>>(`${this.baseURL}${this.endPoint}/All`);
  }
 
  GetById(id: number): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseURL}${this.endPoint}/${id}`);
  }
  
  GetByIdAll(id: number): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseURL}${this.endPoint}/All/${id}`);
  }

  DeleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}${this.endPoint}/${id}`);
  }

  Create(entity: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.baseURL}${this.endPoint}`, entity);
  }

  Update(entity: T): Observable<any> {
    return this.http.put<any>(`${this.baseURL}${this.endPoint}/${entity.id}`, entity);
  }
}
