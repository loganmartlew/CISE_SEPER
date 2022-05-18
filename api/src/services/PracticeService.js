const { Practice } = require('../models/Practice');

class PracticeService {
  static async getPractices() {
    const practices = await Practice.find();
    return practices;
  }
}

module.exports = PracticeService;
