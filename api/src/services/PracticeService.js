const { Practice } = require('../models/Practice');

class PracticeService {
  static async getPractices() {
    const practices = await Practice.find();
    return practices;
  }

  static async getPractice(id) {
    const practice = await Practice.findById(id);
    return practice;
  }

  static async addPractice(name) {
    const practice = await Practice.create({ name });
    return practice;
  }
}

module.exports = PracticeService;
