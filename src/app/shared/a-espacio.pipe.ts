import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(toBeReplaced: string, replaceWith: string): unknown {
    let replace: string = " ";
    return toBeReplaced.replace(replaceWith, replace)
  }
}
