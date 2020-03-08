import React from "react";
import Router from "next/router";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";

import { GlobalStateContext, GlobalDispatchContext } from "../context/global";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const loginMachine = Machine({
  id: "login",
  initial: "editing",
  context: {
    username: "",
    password: "",
    error: null
  },
  states: {
    editing: {
      on: {
        CHANGE_USERNAME: {
          actions: "changeUsername"
        },
        CHANGE_PASSWORD: {
          actions: "changePassword"
        },
        SUBMIT: "submitting"
      }
    },
    submitting: {
      invoke: {
        src: "submit",
        onDone: {
          target: "success",
          actions: "setUserData"
        },
        onError: {
          target: "failure",
          actions: "setError"
        }
      }
    },
    success: {
      type: "final"
    },
    failure: {
      on: {
        CHANGE_USERNAME: {
          target: "editing",
          actions: ["changeUsername", "clearError"]
        },
        CHANGE_PASSWORD: {
          target: "editing",
          actions: ["changePassword", "clearError"]
        }
      }
    }
  }
});

const HomePage = () => {
  const globalState = React.useContext(GlobalStateContext);
  const globalDispatch = React.useContext(GlobalDispatchContext);
  const [current, send] = useMachine(loginMachine, {
    actions: {
      changeUsername: assign({
        username: (_ctx, evt) => evt.value
      }),
      changePassword: assign({
        password: (_ctx, evt) => evt.value
      }),
      setUserData: (_ctx, evt) => {
        globalDispatch({ type: "LOGIN", value: evt.data });
        Router.push("/dashboard");
      },
      setError: assign({
        error: (_ctx, evt) => evt.data
      }),
      clearError: assign({
        error: (_ctx, _evt) => null
      })
    },
    services: {
      submit: (_ctx, _evt) =>
        new Promise(async (resolve, reject) => {
          await sleep(2000);
          const rand = Math.random();
          if (rand < 0.5) {
            reject("failed to log in");
          } else {
            resolve("user secret data");
          }
        })
    }
  });

  const handleUsernameChange = e => {
    send({ type: "CHANGE_USERNAME", value: e.currentTarget.value });
  };

  const handlePasswordChange = e => {
    send({ type: "CHANGE_PASSWORD", value: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    send({ type: "SUBMIT" });
  };

  return (
    <div>
      Signin:
      <form onSubmit={handleSubmit}>
        <input
          value={current.context.username}
          onChange={handleUsernameChange}
        />
        <input
          value={current.context.password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{current.context.error}</div>
      {current.matches("submitting") && <div>signing in...</div>}
    </div>
  );
};

export default HomePage;
