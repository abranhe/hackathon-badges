module.exports = {
  webpack: config => {
    config.entry.main = ['./server.js'];

    return config;
  }
};
