import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

import {
  extractExtensionFromFile,
  generateFileName,
  splitGeneratedFileName,
} from './helpers';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file: Express.Multer.File): string {
    try {
      const fileExtension = extractExtensionFromFile(file);
      const fileName = generateFileName(fileExtension);
      const filePath = path.resolve(__dirname, '..', '..', 'static', type);

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

      return splitGeneratedFileName(type, fileName);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {}
}
