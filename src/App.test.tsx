import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./renderWithProvider";
import { rest } from "msw";
import { setupServer } from "msw/node";
import launchData from "./test/launch.json";

const satrtDate = new Date();
const endDate = new Date();
endDate.setMonth(satrtDate.getMonth() + 3);

export const handlers = [

  rest.get("https://lldev.thespacedevs.com/2.2.0/launch", (req: any, res: any, ctx: any) => {
    return res(launchData, ctx.delay(150));
    
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("renders learn react link", async() => {
  const { container,debug } = renderWithProviders(<App />);
  
  // // eslint-disable-next-line testing-library/no-debugging-utils
  // debug();
  const inputElement = await screen.findByLabelText(/Count of launches:/i);
  expect(inputElement).toBeInTheDocument();
  renderWithProviders(<App />);
  const inputElement2 = await screen.findByPlaceholderText(/number of launches/!);
  expect(inputElement2).toHaveValue("25");
  
});
