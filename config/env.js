module.exports = {
  getConnection: function () {
    return {
      port: parseInt(process.env.PORT) || 8000,
      host: '0.0.0.0'
    };
  }
};
