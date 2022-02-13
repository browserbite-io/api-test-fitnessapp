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
import { CreateExerciseArgs } from "./CreateExerciseArgs";
import { UpdateExerciseArgs } from "./UpdateExerciseArgs";
import { DeleteExerciseArgs } from "./DeleteExerciseArgs";
import { ExerciseFindManyArgs } from "./ExerciseFindManyArgs";
import { ExerciseFindUniqueArgs } from "./ExerciseFindUniqueArgs";
import { Exercise } from "./Exercise";
import { WorkoutDay } from "../../workoutDay/base/WorkoutDay";
import { ExerciseService } from "../exercise.service";

@graphql.Resolver(() => Exercise)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExerciseResolverBase {
  constructor(
    protected readonly service: ExerciseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "read",
    possession: "any",
  })
  async _exercisesMeta(
    @graphql.Args() args: ExerciseFindManyArgs
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

  @graphql.Query(() => [Exercise])
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "read",
    possession: "any",
  })
  async exercises(
    @graphql.Args() args: ExerciseFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Exercise[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Exercise",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Exercise, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "read",
    possession: "own",
  })
  async exercise(
    @graphql.Args() args: ExerciseFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Exercise | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Exercise",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Exercise)
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "create",
    possession: "any",
  })
  async createExercise(
    @graphql.Args() args: CreateExerciseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Exercise> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Exercise",
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
        `providing the properties: ${properties} on ${"Exercise"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        workoutDay: args.data.workoutDay
          ? {
              connect: args.data.workoutDay,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Exercise)
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "update",
    possession: "any",
  })
  async updateExercise(
    @graphql.Args() args: UpdateExerciseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Exercise | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Exercise",
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
        `providing the properties: ${properties} on ${"Exercise"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          workoutDay: args.data.workoutDay
            ? {
                connect: args.data.workoutDay,
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

  @graphql.Mutation(() => Exercise)
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "delete",
    possession: "any",
  })
  async deleteExercise(
    @graphql.Args() args: DeleteExerciseArgs
  ): Promise<Exercise | null> {
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

  @graphql.ResolveField(() => WorkoutDay, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Exercise",
    action: "read",
    possession: "any",
  })
  async workoutDay(
    @graphql.Parent() parent: Exercise,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<WorkoutDay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "WorkoutDay",
    });
    const result = await this.service.getWorkoutDay(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
