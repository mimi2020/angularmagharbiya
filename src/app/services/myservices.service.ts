import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization':`Bearer` +` `+ `${localStorage.getItem("token")}`
    })
  }

  UpdateadminComponent(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  AllProjet()
  {return this.http.get(`${environment.baseUrl}/Project/list`)}

  AllEmploye()
  {return this.http.get(`${environment.baseUrl}/Employe/list`)}

  AllAdmin()
  {return this.http.get(`${environment.baseUrl}/Admin/list`)}

  AllCandidat()
  {return this.http.get(`${environment.baseUrl}/Candidat/list`)}

  AllTask()
  {return this.http.get(`${environment.baseUrl}/Task/list`)}

  AllCategory()
  {return this.http.get(`${environment.baseUrl}/Category/list`)}

  AllOffer()
  {return this.http.get(`${environment.baseUrl}/Offer/list`)}


  AllInscription()
  {return this.http.get(`${environment.baseUrl}/Inscription/list`)}

  AllDepartement()
  {return this.http.get(`${environment.baseUrl}/Departement/list`)}

  AllRecrutement()
  {return this.http.get(`${environment.baseUrl}/Recrutement/list`)}

  AllUser()
  {return this.http.get(`${environment.baseUrl}/User/list`)}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  DetailAdmin(id:String)
  {return this.http.get(`${environment.baseUrl}/Admin/Detailadmin/${id}`)}

  DetailUser(id:String)
  {return this.http.get(`${environment.baseUrl}/User/Detail/${id}`)}

  DetailDepartement(id:String)
  {return this.http.get(`${environment.baseUrl}/Departement/Detail/${id}`)}

  DetailRecrutement(id:String)
  {return this.http.get(`${environment.baseUrl}/Recrutement/Detail/${id}`)}

  DetailInscription(id:String)
  {return this.http.get(`${environment.baseUrl}/Inscription/Detail/${id}`)}

  DetailOffer(id:String)
  {return this.http.get(`${environment.baseUrl}/Offer/Detail/${id}`)}

  DetailCategory(id:String)
  {return this.http.get(`${environment.baseUrl}/Category/Detail/${id}`)}

  DetailTask(id:String)
  {return this.http.get(`${environment.baseUrl}/Task/Detail/${id}`)}

  DetailProject(id:String)
  {return this.http.get(`${environment.baseUrl}/Project/Detail/${id}`)}

  DetailEmploye(id:String)
  {return this.http.get(`${environment.baseUrl}/Employe/Detailemploye/${id}`)}

  DetailCandidat(id:String)
  {return this.http.get(`${environment.baseUrl}/Candidat/Detail/${id}`)}

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  DeleteCategory(id:String)
  {return this.http.delete(`${environment.baseUrl}/Category/Delete/${id}`)}

  DeleteEmploye(id:String)
  {return this.http.delete(`${environment.baseUrl}/Employe/delete/${id}`)}

  DeleteCandidat(id:String)
  {return this.http.delete(`${environment.baseUrl}/Candidat/delete/${id}`)}

  DeleteProject(id:String)
  {return this.http.delete(`${environment.baseUrl}/Project/Delete/${id}`)}

  DeleteTask(id:String)
  {return this.http.delete(`${environment.baseUrl}/Task/Delete/${id}`)}

  DeleteInscription(id:String)
  {return this.http.delete(`${environment.baseUrl}/Inscription/Delete/${id}`)}

  DeleteRecrutement(id:String)
  {return this.http.delete(`${environment.baseUrl}/Recrutement/Delete/${id}`)}

  DeleteDepartement(id:String)
  {return this.http.delete(`${environment.baseUrl}/Departement/delete/${id}`)}

  DeleteAdmin(id:String)
  {console.log("id deleted on service is",id);
    return this.http.delete(`${environment.baseUrl}/Admin/delete/${id}`)}

  DeleteUser(id:String)
  {return this.http.delete(`${environment.baseUrl}/User/Delete/${id}`)}
  ////////////////////////////////////////////////////////////////////////////
  CreateAdmin(Data:any)
  {
    console.log("create 3 service")
    
    return this.http.post(`${environment.baseUrl}/Admin/create`,Data)}

  CreateUser(Data:any)
  {return this.http.post(`${environment.baseUrl}/User/Create/`,Data)}

  CreateCandidat(Data:any)
  {console.log("test start service**************")
    return this.http.post(`${environment.baseUrl}/Candidat/create`,Data)}

  CreateEmploye(Data:any)
  {return this.http.post(`${environment.baseUrl}/Employe/create`,Data)}

  CreateDepartement(Data:any)
  {return this.http.post(`${environment.baseUrl}/Departement/Create/`,Data)}

  CreateTask(Data:any)
  {return this.http.post(`${environment.baseUrl}/Task/Create/`,Data)}

  CreateOffer(Data:any)
  {return this.http.post(`${environment.baseUrl}/Offer/Create/`,Data)}

  CreateRecrutement(Data:any)
  {return this.http.post(`${environment.baseUrl}/Recrutement/Create/`,Data)}

  CreateCategory(Data:any)
  {return this.http.post(`${environment.baseUrl}/Category/Create/`,Data)}

  CreateProject(Data:any)
  {return this.http.post(`${environment.baseUrl}/Project/Create/`,Data)}

  CreateInscription(Data:any)
  {return this.http.post(`${environment.baseUrl}/Inscription/Create/`,Data)}
  //////////////////////////////////////////////////////////////////////////
  UpdateAdmin(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Admin/update/${id}`,Data)}

  UpdateTask(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Task/update/${id}`,Data)}

  UpdateOffer(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Offer/update/${id}`,Data)}

  UpdateDepartement(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Departement/update/${id}`,Data)}

  UpdateRecrutement(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Recrutement/update/${id}`,Data)}

  UpdateCategory(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Category/update/${id}`,Data)}

  UpdateCandidat(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Candidat/update/${id}`,Data)}

  UpdateEmploye(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Employe/update/${id}`,Data)}

  UpdateUser(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/User/update/${id}`,Data)}

  UpdateProject(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Project/update/${id}`,Data)}

  UpdateInscription(id:String, Data:any)
  {return this.http.put(`${environment.baseUrl}/Inscription/update/${id}`,Data)}

 

  login(cat:any)
  {console.log("data on sevice************************",cat)
  console.log("path***********",`${environment.baseUrl}/auth/signin`)
   return this.http.post(`${environment.baseUrl}/auth/signin`,cat)
   
  }

  logout(data:any){
    this.httpOptions  = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         'Authorization':`Bearer` +` `+ data
        })
      }
     //console.log("****************httpheadrs**",this.httpOptions);
     return this.http.get(`${environment.baseUrl}/auth/signout`,this.httpOptions)
    }


    AccepetCandidat(id:String){
    
       return this.http.get(`${environment.baseUrl}/Candidat/accept/${id}`)
      }



      sendmail(data:any)
      { return this.http.get(`${environment.baseUrl}/Candidat/sendmail`,data)}
}
