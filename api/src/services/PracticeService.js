const { Practice } = require('../models/Practice');

class PracticeService {
  static async getPractices() {
    const practices = await Practice.find();
    return practices;
  }

  static async addPractice(name) {
    const practice = await Practice.create({ name });
    return practice;
  }
}

module.exports = PracticeService;
