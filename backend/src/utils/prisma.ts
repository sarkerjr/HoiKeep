import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma, Prisma };
