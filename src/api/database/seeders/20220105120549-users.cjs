module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "Elena",
          user_email: "elenacfnb@gmail.com",
          user_password:
            "$2a$10$4LOQhv6AsybHtW6HMavQxeUDRxmhfC1Fcb2MFq0II4x6hhQkI3.0K",
          user_role: "admin",
          user_created_at: new Date(),
          user_updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete("users", [
      { user_email: "elenacfnb@gmail.com" },
    ]);
  },
};
