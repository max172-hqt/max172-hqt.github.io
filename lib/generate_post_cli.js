#!/usr/bin/env node
const { readdir } = require('fs/promises');
const fs = require('fs');
const path = require('path');

const problemName = process.env.npm_config_name;

if (!problemName) {
  console.log("Please enter a problem name with --name");
  process.exit(1);
}

const LEETCODE_API_URL = "https://leetcode.com/graphql";

const GRAPHQL_QUERY = `
    query questionData($titleSlug: String) {
        question(titleSlug: $titleSlug) {
            questionId
            title
        }
    } 
`;

const postsPath = path.join(process.cwd(), '/posts');

(async () => {
  try {
    const files = await readdir(postsPath);
    for (const file of files) {
      if (file == `${problemName}.md`) {

        console.error(`${problemName} has already existed`);
        return;
      }
    }
  } catch (err) {
    throw err;
  }

  const res = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: {
        titleSlug: problemName,
      },
    }),
  });

  console.log('Getting Leetcode data for ' + problemName);
  const data = await res.json();
  if (data.errors) {
    console.error('Cannot create problem: ' + problemName, data.errors);
    process.exit(1);
  }

  const {questionId, title} = data.data.question;
  const questionTitle = `${questionId.padStart(4, '0')}. ${title}`
  const fileTemplate = `---
title: '${questionTitle}'
link: 'https://leetcode.com/problems/${problemName}/'
topic: TODO
---

### Solution
TODO
### Complexity
TODO`;

  const fullPath = path.join(postsPath, `${problemName}.md`);
  fs.writeFile(fullPath, fileTemplate, function (err) {
    if (err) {
      throw err;
    }
  });

  console.log(`Post for problem ${problemName} is generated successfully!`);
})();
