const { Meeting } = require('../models');

const MeetingController = {
  async store(req, res) {
    try {
      const { date, time } = req.body;
      const meeting = await Meeting.create({
        date,
        time,
      });

      return res.json(meeting);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  },
};

module.exports = MeetingController;
