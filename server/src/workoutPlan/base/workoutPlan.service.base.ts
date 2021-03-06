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
import {
  Prisma,
  WorkoutPlan,
  Tip,
  WorkoutDay,
  Goal,
  Location,
} from "@prisma/client";

export class WorkoutPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkoutPlanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanFindManyArgs>
  ): Promise<number> {
    return this.prisma.workoutPlan.count(args);
  }

  async findMany<T extends Prisma.WorkoutPlanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanFindManyArgs>
  ): Promise<WorkoutPlan[]> {
    return this.prisma.workoutPlan.findMany(args);
  }
  async findOne<T extends Prisma.WorkoutPlanFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanFindUniqueArgs>
  ): Promise<WorkoutPlan | null> {
    return this.prisma.workoutPlan.findUnique(args);
  }
  async create<T extends Prisma.WorkoutPlanCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanCreateArgs>
  ): Promise<WorkoutPlan> {
    return this.prisma.workoutPlan.create<T>(args);
  }
  async update<T extends Prisma.WorkoutPlanUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanUpdateArgs>
  ): Promise<WorkoutPlan> {
    return this.prisma.workoutPlan.update<T>(args);
  }
  async delete<T extends Prisma.WorkoutPlanDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutPlanDeleteArgs>
  ): Promise<WorkoutPlan> {
    return this.prisma.workoutPlan.delete(args);
  }

  async findTips(
    parentId: string,
    args: Prisma.TipFindManyArgs
  ): Promise<Tip[]> {
    return this.prisma.workoutPlan
      .findUnique({
        where: { id: parentId },
      })
      .tips(args);
  }

  async findWorkoutDays(
    parentId: string,
    args: Prisma.WorkoutDayFindManyArgs
  ): Promise<WorkoutDay[]> {
    return this.prisma.workoutPlan
      .findUnique({
        where: { id: parentId },
      })
      .workoutDays(args);
  }

  async getGoal(parentId: string): Promise<Goal | null> {
    return this.prisma.workoutPlan
      .findUnique({
        where: { id: parentId },
      })
      .goal();
  }

  async getLocation(parentId: string): Promise<Location | null> {
    return this.prisma.workoutPlan
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
