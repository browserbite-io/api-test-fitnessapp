import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WorkoutDayServiceBase } from "./base/workoutDay.service.base";

@Injectable()
export class WorkoutDayService extends WorkoutDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
