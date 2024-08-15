export interface VolunteerSearchPagenation{
    sortDirection: string | null;
    start: Date | null;
    degreeId: number | null;
    search: string | null;
    page: number | null;
    statusIdAsString: string | null;
    pageSize: number | null;
    sortColumn: string | null;
    workPlace: string | null;
    daysAsString: string | null;
    end: Date | null;
    principalityId: number | null;
    genderId: number | null;
    age: number | null;
}
export function VolunteerSearchPagenationToFormData(model:VolunteerSearchPagenation){
    let form = new FormData();
    form.append("sortDirection",model.sortDirection ?model.sortDirection:"");
    form.append("start",model.start ?model.start.toString():"");
    form.append("degreeId",model.degreeId ?model.degreeId.toString():"");
    form.append("search",model.search ?model.search:"");
    form.append("page",model.page ?model.page.toString():"1");
    form.append("statusIdAsString",model.statusIdAsString ?model.statusIdAsString:"");
    form.append("pageSize",model.pageSize ?model.pageSize.toString():"10");
    form.append("sortColumn",model.sortColumn ?model.sortColumn:"");
    form.append("workPlace",model.workPlace ?model.workPlace:"");
    form.append("daysAsString",model.daysAsString ?model.daysAsString:"");
    form.append("end",model.end ?model.end.toString():"");
    form.append("principalityId",model.principalityId ?model.principalityId.toString():"");
    form.append("genderId",model.genderId ?model.genderId.toString():"");
    form.append("age",model.age ?model.age.toString():"");
    return form;
}