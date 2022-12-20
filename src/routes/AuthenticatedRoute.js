const AuthenticatedRoute = ({ login, route: RootRoute, ...props }) => {
  return (
    <div>
      <RootRoute {...props} />
    </div>
  )
}

export default AuthenticatedRoute