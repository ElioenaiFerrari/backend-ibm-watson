const { Model, DataTypes } = require('sequelize');

class Meeting extends Model {
  static init(sequelize) {
    super.init(
      {
        date: DataTypes.DATE,
        time: DataTypes.TIME,
      },
      { sequelize }
    );
  }
}

module.exports = Meeting;
