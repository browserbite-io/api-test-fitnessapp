import { Module } from "@nestjs/common";
import { WorkoutDayModuleBase } from "./base/workoutDay.module.base";
import { WorkoutDayService } from "./workoutDay.service";
import { WorkoutDayController } from "./workoutDay.controller";
import { WorkoutDayResolver } from "./workoutDay.resolver";

@Module({
  imports: [WorkoutDayModuleBase],
  controllers: [WorkoutDayController],
  providers: [WorkoutDayService, WorkoutDayResolver],
  exports: [WorkoutDayService],
})
export class WorkoutDayModule {}
