import {
  ArgumentMetadata,
  HttpException,
  PipeTransform,
  HttpStatus,
} from '@nestjs/common';

export class validationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata); // not neceassary to use or import
    if (value) return value;
    else {
      throw new HttpException('Invalid Data', HttpStatus.AMBIGUOUS);
    }
  }
}
