/**
 * Created by iZel on 4/21/17.
 */
import {Injectable} from "@angular/core";
import {Http, XHRBackend, RequestOptions,Headers} from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpExport extends Http{

  headers:any={
    "Content-Type":"application/json"
  };

  constructor(_backend: XHRBackend, _defaultOptions: RequestOptions, headers?:any){
    super(_backend,_defaultOptions);
    if(headers){
      this.headers=headers
    }
  }

  get(url:string){
    return super.get(url,{headers:new Headers(this.headers)})
      .map((data)=>data.json())
      .catch(this._handleError)
  }

  post(url:string,body?:any,options?:RequestOptions){
    return super.post(url,body,options)
      .map(data=>data.json())
      .catch(this._handleError)
  }


  private _handleError(e){
    console.log(e);
    return Observable.throw(e);
  }

}
