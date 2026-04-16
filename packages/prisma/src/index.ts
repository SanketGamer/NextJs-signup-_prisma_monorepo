import { PrismaClient } from "@prisma/client";
import "dotenv/config";

export const client = new PrismaClient();
