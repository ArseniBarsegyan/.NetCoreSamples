namespace IdentityServer.Helpers
{
    public static class ConstantsHelper
    {
        public const string AllowedScope = "ResourceApi";

        public const string AngularClientRedirectUris = "http://localhost:4200/auth-callback";
        public const string AngularClientPostLogoutRedirectUris = "http://localhost:4200/logout-callback";
        public const string AngularClientAllowedCorsOrigins = "http://localhost:4200";

        public const string MVCClientRedirectUris = "http://localhost:59411/signin-oidc";
        public const string MVCClientPostLogoutRedirectUris = "http://localhost:59411/signout-callback-oidc";

        public const string ContextShemaName = "dbo";
        public const string DefaultConnection = "DefaultConnection";
        public const string EmailIsEmpty = "Email is empty";
        public const string PasswordIsEmpty = "Password is empty";
        public const string PasswordErrorMessage = "PASSWORD_MIN_LENGTH";
        public const string PasswordIncorrect = "Password incorrect";
        public const string ReleaseVersionConnection = "ReleaseVersionConnection";
    }
}