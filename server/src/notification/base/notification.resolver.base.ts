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
import { CreateNotificationArgs } from "./CreateNotificationArgs";
import { UpdateNotificationArgs } from "./UpdateNotificationArgs";
import { DeleteNotificationArgs } from "./DeleteNotificationArgs";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationFindUniqueArgs } from "./NotificationFindUniqueArgs";
import { Notification } from "./Notification";
import { Goal } from "../../goal/base/Goal";
import { Location } from "../../location/base/Location";
import { NotificationService } from "../notification.service";

@graphql.Resolver(() => Notification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NotificationResolverBase {
  constructor(
    protected readonly service: NotificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async _notificationsMeta(
    @graphql.Args() args: NotificationFindManyArgs
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

  @graphql.Query(() => [Notification])
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async notifications(
    @graphql.Args() args: NotificationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Notification",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Notification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "own",
  })
  async notification(
    @graphql.Args() args: NotificationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Notification",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "create",
    possession: "any",
  })
  async createNotification(
    @graphql.Args() args: CreateNotificationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Notification",
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
        `providing the properties: ${properties} on ${"Notification"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        goal: args.data.goal
          ? {
              connect: args.data.goal,
            }
          : undefined,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "update",
    possession: "any",
  })
  async updateNotification(
    @graphql.Args() args: UpdateNotificationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Notification",
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
        `providing the properties: ${properties} on ${"Notification"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          goal: args.data.goal
            ? {
                connect: args.data.goal,
              }
            : undefined,

          location: args.data.location
            ? {
                connect: args.data.location,
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

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "delete",
    possession: "any",
  })
  async deleteNotification(
    @graphql.Args() args: DeleteNotificationArgs
  ): Promise<Notification | null> {
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

  @graphql.ResolveField(() => Goal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async goal(
    @graphql.Parent() parent: Notification,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Goal | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Goal",
    });
    const result = await this.service.getGoal(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Location, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async location(
    @graphql.Parent() parent: Notification,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Location | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Location",
    });
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
