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
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TipService } from "../tip.service";
import { TipCreateInput } from "./TipCreateInput";
import { TipWhereInput } from "./TipWhereInput";
import { TipWhereUniqueInput } from "./TipWhereUniqueInput";
import { TipFindManyArgs } from "./TipFindManyArgs";
import { TipUpdateInput } from "./TipUpdateInput";
import { Tip } from "./Tip";
@swagger.ApiBearerAuth()
export class TipControllerBase {
  constructor(
    protected readonly service: TipService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Tip })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TipCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tip> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Tip",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Tip"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        nutritionPlan: data.nutritionPlan
          ? {
              connect: data.nutritionPlan,
            }
          : undefined,

        workoutPlan: data.workoutPlan
          ? {
              connect: data.workoutPlan,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        name: true,

        nutritionPlan: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        video: true,

        workoutPlan: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Tip] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TipFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tip[]> {
    const args = plainToClass(TipFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tip",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        name: true,

        nutritionPlan: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        video: true,

        workoutPlan: {
          select: {
            id: true,
          },
        },
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TipWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tip | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tip",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        name: true,

        nutritionPlan: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        video: true,

        workoutPlan: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TipWhereUniqueInput,
    @common.Body()
    data: TipUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tip | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Tip",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Tip"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          nutritionPlan: data.nutritionPlan
            ? {
                connect: data.nutritionPlan,
              }
            : undefined,

          workoutPlan: data.workoutPlan
            ? {
                connect: data.workoutPlan,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          image: true,
          name: true,

          nutritionPlan: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          video: true,

          workoutPlan: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Tip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Tip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TipWhereUniqueInput
  ): Promise<Tip | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          image: true,
          name: true,

          nutritionPlan: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          video: true,

          workoutPlan: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}