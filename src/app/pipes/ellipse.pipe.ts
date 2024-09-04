import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse',
  standalone: true,
})
export class EllipsePipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 100) + '...';
  }
}
