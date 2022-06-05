import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PetService {
  constructor(
    private http: HttpClient
  ) { }

  private petsUrl = 'api/pets';  // URL to web api
  
  //возврат Observable<Pet[]>
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
    .pipe(
      catchError(this.handleError<Pet[]>('getPets', []))
    );
  }
  
  getPet(id: number): Observable<Pet> {
    // сообщение после получения животного
    const url = `${this.petsUrl}/${id}`;
    return this.http.get<Pet>(url).pipe(
      tap(_ => console.log(`fetched pet id=${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    );
  }

  // сохранение изменений животного на сервере
  updatePet (pet: Pet): Observable<any> {
    return this.http.put(this.petsUrl, pet, httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${pet.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  //создание нового животного
  /** добавить нового героя на сервер */
  addPet (pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl, pet, httpOptions).pipe(
      tap((newPet: Pet) => console.log(`added pet w/ id=${newPet.id}`)),
      catchError(this.handleError<Pet>('addPet'))
    );
  }

  /**удалить животное с сервера */
deletePet (pet: Pet | number): Observable<Pet> {
  const id = typeof pet === 'number' ? pet : pet.id;
  const url = `${this.petsUrl}/${id}`;

  return this.http.delete<Pet>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted pet id=${id}`)),
    catchError(this.handleError<Pet>('deletePet'))
  );
}

//поиск по имени
/*получить домашних животных, имя которых содержит поисковый запрос */
searchPets(term: string): Observable<Pet[]> {
  if (!term.trim()) {
    // если не поисковый запрос, вернуть пустой массив животных.
    return of([]);
  }
  return this.http.get<Pet[]>(`${this.petsUrl}/?name=${term}`).pipe(
    tap(_ => console.log(`found pets matching "${term}"`)),
    catchError(this.handleError<Pet[]>('searchPets', []))
  );
}

   /** Зарегистрация сообщения PetService с помощью MessageService*/
      /**
       * Обработка сбойной операции Http.
       * Дайте приложению продолжить.
       * @param operation - название операции, которая не удалась
       * @param result - необязательное значение, возвращаемое в качестве наблюдаемого результата
       */

       private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          //отправить сообщение об ошибке в инфраструктуру удаленного ведения журнала
          console.error(error); // вместо этого войдите в консоль
  
          // Позвольте приложению продолжить работу, вернув пустой результат.
          return of(result as T);
        };
      }
}

