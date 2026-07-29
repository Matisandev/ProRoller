import { Injectable } from '@nestjs/common';
import type { HealthStatus } from './health.types';

@Injectable()
export class HealthService {
  getStatus(): HealthStatus {
    return { status: 'ok', uptimeSeconds: Math.floor(process.uptime()) };
  }
}
