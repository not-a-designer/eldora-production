import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { CollectionReference, DocumentReference, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { IConcher } from '../declarations/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConcherService {

  constructor(private firestore: Firestore) { }

  getAllConchers(): Observable<IConcher[]> {
    const conchersRef = collection(this.firestore, 'conchers') as CollectionReference<IConcher>;
    return collectionData(conchersRef, { idField: 'position' });
  }

  getConcherById(id: number): Observable<IConcher> {
    const concherDocRef = doc(this.firestore, `conchers/${id}`) as DocumentReference<IConcher>;
    return docData(concherDocRef, { idField: 'position' })
  }

  startConcher(id: number, batchContents: any) {
    const concherDocRef = doc(this.firestore, `conchers/${id}`) as DocumentReference<IConcher>;
    return updateDoc(concherDocRef, { active: true, batchContents })
  }

  finalizeConcher(id: number) {
    const concherDocRef = doc(this.firestore, `conchers/${id}`) as DocumentReference<IConcher>;
    return updateDoc(concherDocRef, { active: false, batchContents: null})
  }

  async toggleConcher(id: number, enabled: boolean) {
    const concherDocRef = doc(this.firestore, `conchers/${id}`) as DocumentReference<IConcher>;
    const { active, enabled: prevEnabled } = await docData(concherDocRef, { idField: 'position' }).toPromise();
    if (enabled === prevEnabled) return;
    return updateDoc(concherDocRef, {
      active: enabled === false ? false : active, 
      enabled, 
      batchContents: null
    });
  }

}
