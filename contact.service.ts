import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpclientobj: HttpClient) { }
  private url: string = "http://localhost:3000/contacts";
  public addnewcontact(contactobj: Contact) {
    let jdata = JSON.stringify(contactobj);
    return this.httpclientobj.post(this.url, jdata);
  }
  public modifycontact(contactobj: Contact, id: number) {
    let u = this.url + "/" + id;
    let jdata = JSON.stringify(contactobj);
    return this.httpclientobj.put(u, jdata);
  }
  public removecontact(id: number) {
    let u = this.url + "/" + id;
    return this.httpclientobj.delete(u);
  }
  public getcontactbyid(id: number) {
    let u = this.url + "/" + id;
    return this.httpclientobj.get<Contact>(u);
  }
  public getallcontacts() {
    return this.httpclientobj.get<Contact[]>(this.url);
  }
}
