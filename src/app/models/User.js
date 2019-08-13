module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  })
  return User
}

// mudar esse banco de dados para se adequar a ETC
