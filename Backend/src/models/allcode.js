"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allcode.hasMany(models.User, {
        foreignKey: "positionID",
        as: "positionData",
      }),
        Allcode.hasMany(models.User, {
          foreignKey: "gender",
          as: "genderData",
        });
      Allcode.hasMany(models.Schedule, {
        foreignKey: "timeType",
        as: "timeTypeData",
      });
      Allcode.hasMany(models.Doctor_Info, {
        foreignKey: "priceID",
        as: "priceTypeData",
      });
      Allcode.hasMany(models.Doctor_Info, {
        foreignKey: "paymentID",
        as: "paymentTypeData",
      });
      Allcode.hasMany(models.Doctor_Info, {
        foreignKey: "provinceID",
        as: "provinceTypeData",
      });
      Allcode.hasMany(models.Booking, {
        foreignKey: "timeType",
        as: "timeTypeDataPaTient",
      });
    }
  }
  Allcode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
