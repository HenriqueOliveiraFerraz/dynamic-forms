import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService<
  T extends {
    [K in keyof T]: any;
  }
> {
  constructor(@Inject('T') private readonly obj: T) {
    this.createDynamicForm(this.obj);
  }

  createDynamicForm<
    Type extends {
      [K in keyof Type]: any;
    }
  >(obj: Type) {
    Object.keys(obj).forEach((key: string) => {
      const prop = obj[key as keyof Type];

      if (typeof prop === 'object') {
        this.createDynamicForm(prop);
        console.log(prop);
      } else {
        console.log(key, prop, typeof prop);
      }
    });
  }
}
