// Libraries
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

// Service
import articleService from "../services/articleServices";

// Mocks
jest.mock("../services/articleServices");

test("renders zero articles without errors", async () => {
  articleService.mockResolvedValueOnce([]);
  render(<View />);
  await waitFor(() => {
    const articles = screen.queryAllByTestId("article");
    expect(articles).toHaveLength(0);
  });
});

test("renders three articles without errors", async () => {
  articleService.mockResolvedValueOnce([
    {
      id: 1,
      headline: "Game of Thrones Season 9?",
      author: "Samson Caviar",
      createdOn: "2021-08-09T18:02:38-04:00",
      summary: "You wish.",
      body: "The cake is a lie"
    },
    {
      id: 2,
      headline: "Can Rocks Grow?",
      author: "John Tavern",
      createdOn: "2020-01-05T18:06:73-02:00",
      summary: "Rocks cannot grow :(",
      body: "I wanna rock! ROCK!"
    },
    {
      id: 3,
      headline: "This New Si-Fi Show Will BLOW your mind!",
      author: "Bob Cena",
      createdOn: "2019-03-08T17:02:32-01:00",
      summary: "Space!",
      body: "Humans invade alien colony and find ancient tablet about humans."
    },
  ]);
  render(<View />);
  await waitFor(() => {
    const articles = screen.queryAllByTestId("article");
    expect(articles).toHaveLength(3);
  });
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
