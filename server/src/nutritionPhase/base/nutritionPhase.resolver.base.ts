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
import { CreateNutritionPhaseArgs } from "./CreateNutritionPhaseArgs";
import { UpdateNutritionPhaseArgs } from "./UpdateNutritionPhaseArgs";
import { DeleteNutritionPhaseArgs } from "./DeleteNutritionPhaseArgs";
import { NutritionPhaseFindManyArgs } from "./NutritionPhaseFindManyArgs";
import { NutritionPhaseFindUniqueArgs } from "./NutritionPhaseFindUniqueArgs";
import { NutritionPhase } from "./NutritionPhase";
import { RecipeFindManyArgs } from "../../recipe/base/RecipeFindManyArgs";
import { Recipe } from "../../recipe/base/Recipe";
import { NutritionPhaseService } from "../nutritionPhase.service";

@graphql.Resolver(() => NutritionPhase)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NutritionPhaseResolverBase {
  constructor(
    protected readonly service: NutritionPhaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "read",
    possession: "any",
  })
  async _nutritionPhasesMeta(
    @graphql.Args() args: NutritionPhaseFindManyArgs
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

  @graphql.Query(() => [NutritionPhase])
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "read",
    possession: "any",
  })
  async nutritionPhases(
    @graphql.Args() args: NutritionPhaseFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NutritionPhase[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "NutritionPhase",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => NutritionPhase, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "read",
    possession: "own",
  })
  async nutritionPhase(
    @graphql.Args() args: NutritionPhaseFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NutritionPhase | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "NutritionPhase",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => NutritionPhase)
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "create",
    possession: "any",
  })
  async createNutritionPhase(
    @graphql.Args() args: CreateNutritionPhaseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NutritionPhase> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "NutritionPhase",
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
        `providing the properties: ${properties} on ${"NutritionPhase"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => NutritionPhase)
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "update",
    possession: "any",
  })
  async updateNutritionPhase(
    @graphql.Args() args: UpdateNutritionPhaseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NutritionPhase | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "NutritionPhase",
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
        `providing the properties: ${properties} on ${"NutritionPhase"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => NutritionPhase)
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "delete",
    possession: "any",
  })
  async deleteNutritionPhase(
    @graphql.Args() args: DeleteNutritionPhaseArgs
  ): Promise<NutritionPhase | null> {
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

  @graphql.ResolveField(() => [Recipe])
  @nestAccessControl.UseRoles({
    resource: "NutritionPhase",
    action: "read",
    possession: "any",
  })
  async recipes(
    @graphql.Parent() parent: NutritionPhase,
    @graphql.Args() args: RecipeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Recipe[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Recipe",
    });
    const results = await this.service.findRecipes(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
