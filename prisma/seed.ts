import { db } from "../src/utils/db.server";

async function seed() {
  await db.user_account.deleteMany({});

  await Promise.all(
    getUser().map((user) => {
      return db.user_account.create({
        data: {
          id: user.id,
          full_name: user.full_name,
          username: user.username,
          email: user.email,
          image: user.image,
        },
      });
    })
  );
}

seed();

function getUser() {
  return [
    {
      id: "test123",
      full_name: "James Brown",
      username: "jamesbrown",
      email: "james_brown@gmail.com",
      image: "/images/profile-james.png",
    },
  ];
}
