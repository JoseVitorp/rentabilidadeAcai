// src/app/services/acai.service.ts
import { Injectable } from '@angular/core';
import { AcaiSize } from '../models/acai-size';

@Injectable({
  providedIn: 'root'
})
export class AcaiService {
  private acaiSizes: AcaiSize[] = [
    { size: 300, costPerMl: 0.0145, sellingPrice: 16.0 },
    { size: 500, costPerMl: 0.0145, sellingPrice: 20.0 },
    { size: 700, costPerMl: 0.0145, sellingPrice: 25.0 }
  ];

  getAcaiSizes(): AcaiSize[] {
    return this.acaiSizes;
  }
}
