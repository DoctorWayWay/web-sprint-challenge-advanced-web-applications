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

// test("renders three articles without errors", async ()=> {
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
