import React from "react";

export const LoginPage = (): React.ReactElement => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <p style={{ margin: 0, marginRight: "5em" }}>username: </p>
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "5em",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0, marginRight: "5em" }}>password:</p>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};
