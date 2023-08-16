import React from "react";
import * as api from "../api/Api";

export const LoginPage = (): React.ReactElement => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onLogin = async (username: string, password: string) => {
    const rest = await api.postData("login", { username, password });
    console.log(rest);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignContent: "center" }}>
        <p style={{ margin: 0, marginRight: "1em" }}>username: </p>
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "1em",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0, marginRight: "1em", alignContent: "center" }}>
          password:
        </p>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>

      <button
        style={{
          borderRadius: 12,
          marginTop: "1em",
          width: "5em",
          alignSelf: "center",
          justifySelf: "center",
        }}
        onClick={() => onLogin(username, password)}
      >
        Login
      </button>
    </div>
  );
};
