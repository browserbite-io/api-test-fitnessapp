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
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateWorkoutDayArgs } from "./CreateWorkoutDayArgs";
import { UpdateWorkoutDayArgs } from "./UpdateWorkoutDayArgs";
import { DeleteWorkoutDayArgs } from "./DeleteWorkoutDayArgs";
import { WorkoutDayFindManyArgs } from "./WorkoutDayFindManyArgs";
import { WorkoutDayFindUniqueArgs } from "./WorkoutDayFindUniqueArgs";
import { WorkoutDay } from "./WorkoutDay";
import { ExerciseFindManyArgs } from "../../exercise/base/ExerciseFindManyArgs";
import { Exercise } from "../../exercise/base/Exercise";
import { WorkoutPlan } from "../../workoutPlan/base/WorkoutPlan";
import { WorkoutDayService } from "../workoutDay.service";

@graphql.Resolver(() => WorkoutDay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WorkoutDayResolverBase {
  constructor(
    protected readonly service: WorkoutDayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "read",
    possession: "any",
  })
  async _workoutDaysMeta(
    @graphql.Args() args: WorkoutDayFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [WorkoutDay])
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "read",
    possession: "any",
  })
  async workoutDays(
    @graphql.Args() args: WorkoutDayFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutDay[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "WorkoutDay",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => WorkoutDay, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "read",
    possession: "own",
  })
  async workoutDay(
    @graphql.Args() args: WorkoutDayFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutDay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "WorkoutDay",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => WorkoutDay)
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "create",
    possession: "any",
  })
  async createWorkoutDay(
    @graphql.Args() args: CreateWorkoutDayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutDay> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "WorkoutDay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"WorkoutDay"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        workoutPlan: args.data.workoutPlan
          ? {
              connect: args.data.workoutPlan,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => WorkoutDay)
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "update",
    possession: "any",
  })
  async updateWorkoutDay(
    @graphql.Args() args: UpdateWorkoutDayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutDay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "WorkoutDay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"WorkoutDay"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          workoutPlan: args.data.workoutPlan
            ? {
                connect: args.data.workoutPlan,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WorkoutDay)
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "delete",
    possession: "any",
  })
  async deleteWorkoutDay(
    @graphql.Args() args: DeleteWorkoutDayArgs
  ): Promise<WorkoutDay | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Exercise])
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "read",
    possession: "any",
  })
  async exercises(
    @graphql.Parent() parent: WorkoutDay,
    @graphql.Args() args: ExerciseFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Exercise[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Exercise",
    });
    const results = await this.service.findExercises(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => WorkoutPlan, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkoutDay",
    action: "read",
    possession: "any",
  })
  async workoutPlan(
    @graphql.Parent() parent: WorkoutDay,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutPlan | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "WorkoutPlan",
    });
    const result = await this.service.getWorkoutPlan(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
