import React from "react";

export const LoginPage = (): React.ReactElement => {
  const [username, setUserName] = React.useState<String>("admin123");
  const [password, setPassword] = React.useState<String>("admin123");
  return (
    <>
      <p>"username:" {username}</p>
      <p>"password:" {password}</p>
    </>
  );
};
