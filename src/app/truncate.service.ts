import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe {
    abc=[{}];
  transform(value: [{}], args: number) : [{}] {
    // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // let trail = args.length > 1 ? args[1] : '...';
    // let limit = args ? parseInt(args, 10) : 10;
    // let trail = '...';
    console.log('........................',args);
    return value.length > args ? [{}]
    : value;
  }
}