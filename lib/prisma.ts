import { PrismaClient } from '../prisma/generated/client';

let prisma: PrismaClient;
declare global {
    namespace globalThis {
      var prisma: PrismaClient
    }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;