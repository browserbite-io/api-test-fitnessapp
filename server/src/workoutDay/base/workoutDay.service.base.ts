/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, WorkoutDay, Exercise, WorkoutPlan } from "@prisma/client";

export class WorkoutDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkoutDayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayFindManyArgs>
  ): Promise<number> {
    return this.prisma.workoutDay.count(args);
  }

  async findMany<T extends Prisma.WorkoutDayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayFindManyArgs>
  ): Promise<WorkoutDay[]> {
    return this.prisma.workoutDay.findMany(args);
  }
  async findOne<T extends Prisma.WorkoutDayFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayFindUniqueArgs>
  ): Promise<WorkoutDay | null> {
    return this.prisma.workoutDay.findUnique(args);
  }
  async create<T extends Prisma.WorkoutDayCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayCreateArgs>
  ): Promise<WorkoutDay> {
    return this.prisma.workoutDay.create<T>(args);
  }
  async update<T extends Prisma.WorkoutDayUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayUpdateArgs>
  ): Promise<WorkoutDay> {
    return this.prisma.workoutDay.update<T>(args);
  }
  async delete<T extends Prisma.WorkoutDayDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutDayDeleteArgs>
  ): Promise<WorkoutDay> {
    return this.prisma.workoutDay.delete(args);
  }

  async findExercises(
    parentId: string,
    args: Prisma.ExerciseFindManyArgs
  ): Promise<Exercise[]> {
    return this.prisma.workoutDay
      .findUnique({
        where: { id: parentId },
      })
      .exercises(args);
  }

  async getWorkoutPlan(parentId: string): Promise<WorkoutPlan | null> {
    return this.prisma.workoutDay
      .findUnique({
        where: { id: parentId },
      })
      .workoutPlan();
  }
}