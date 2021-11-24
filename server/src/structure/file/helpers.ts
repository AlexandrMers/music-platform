import * as uuid from 'uuid';
import { FileType } from './file.service';

export function extractExtensionFromFile(file: Express.Multer.File) {
  return file.originalname.split('.').pop();
}

export function generateFileName(fileExtension) {
  return `${uuid.v4()}.${fileExtension}`;
}

export function splitGeneratedFileName(type: FileType, fileName: string) {
  return type + '/' + fileName;
}
