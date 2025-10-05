import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const main = async () => {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "John Smith",
  //     email: "john@example.com",
  //   },
  // });
  // console.log("Usuario creado", newUser);

  await prisma.user.deleteMany();
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
