const { handleHttpError } = require("../utils/handleError");

const checkRole = (role) => (req, res, next) => {
  try {
    const { user } = req;
    console.log({ user });
    const rolesByUser = user.role;
    const checkValueRol = role.some((roleSinge) =>
      rolesByUser.uncludes(roleSinge)
    );
    if (!checkValueRol) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (error) {
    handleHttpError(res, "ERROR_PERMISION", 403);
  }
};

module.exports = checkRole;
