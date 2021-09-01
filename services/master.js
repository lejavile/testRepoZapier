/* eslint-disable prettier/prettier */
class MasterService {
  constructor() {
    this.message = 'test zapier';
    this.data = { testZapier: 1, name: 'test lejavile' };
  }

  async getGreeting() {
    try {
      // console.log(this.data);
      return {
        success: true,
        data: this.data || null,
        message: this.message,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

module.exports = MasterService;
