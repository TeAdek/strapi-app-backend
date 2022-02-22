module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fdcf3b4e6398cde32074232ebf544cc'),
  },
});
