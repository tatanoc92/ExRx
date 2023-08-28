"use client";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

async function fetchUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user); // You can display the user info as needed
  } catch (error) {
    console.log("Not authenticated");
  }
}

function login({ signOut, user, renderedAt }) {
  return (
    <Authenticator socialProviders={["amazon", "apple", "facebook", "google"]}>
      ...
    </Authenticator>
  );
}

export default withAuthenticator(login);
