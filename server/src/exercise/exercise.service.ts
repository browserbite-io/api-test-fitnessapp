import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ExerciseServiceBase } from "./base/exercise.service.base";

@Injectable()
export class ExerciseService extends ExerciseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
