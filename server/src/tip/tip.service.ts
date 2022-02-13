import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TipServiceBase } from "./base/tip.service.base";

@Injectable()
export class TipService extends TipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
