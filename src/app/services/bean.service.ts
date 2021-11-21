import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { CollectionReference, deleteDoc, DocumentReference } from '@firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IBean } from '../declarations/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BeanService {

  private beanList$: Observable<IBean[]>;

  constructor(private firestore: Firestore) { }

  getAllBeans(): Observable<IBean[]> {
    if (!this.beanList$) {
      const beansRef = collection(this.firestore, 'beans') as CollectionReference<IBean>;
      this.beanList$ = collectionData(
        beansRef, 
        { idField: 'id' }
      ).pipe(shareReplay(1)) as Observable<IBean[]>;
    }
    return this.beanList$;
  }

  getBeanById(id: string): Observable<IBean> {
    const beansDocRef = doc(this.firestore, `beans/${id}`) as DocumentReference<IBean>;
    return docData(beansDocRef, { idField: 'id' });
  }

  addBean(bean: IBean) {
    const beansRef = collection(this.firestore, 'beans') as CollectionReference<IBean>;
    return addDoc(beansRef, bean);
  }

  updateBean(bean: any): Promise<void> {
    const beansDocRef = doc(this.firestore, `beans/${bean.id}`);
    return updateDoc(beansDocRef, bean)
  }

  watchBean(id: string): Observable<IBean> {
    return this.beanList$.pipe(
      map((beans: IBean[]) => beans.find((bean: IBean) => bean.id === id))
    );
  }

  deleteBean(bean: any): Promise<void> {
    const beansDocRef = doc(this.firestore, `beans/${bean.id}`);
    return deleteDoc(beansDocRef);
  }
}
