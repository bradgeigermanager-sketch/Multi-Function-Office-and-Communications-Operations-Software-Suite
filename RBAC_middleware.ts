export function requirePermission(
 permission: Permission
) {
  return (
    req,
    res,
    next
  ) => {

    if (
      !req.user.permissions.includes(permission)
    ) {
      return res.status(403).send();
    }

    next();
  };
}
`
